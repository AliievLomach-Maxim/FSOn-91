import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProductsWithSearch } from '../../api/products'
// import FormikSearchProducts from '../../components/Forms/FormikSearchProducts'
import ProductsListWithSearch from '../../components/ProductsListWithSearch'
import FormSearchProducts from '../../components/Forms/FormSearchProducts'
import { useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
	const [query, setQuery] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [products, setProducts] = useState(null)
	const [counter, setCounter] = useState(0)

	const [searchParams] = useSearchParams()

	const sortedProducts = useMemo(() => {
		return (
			products &&
			products.toSorted((a, b) => {
				console.log('sorting')
				for (let i = 0; i < 10000000; i++) {}
				return a.price - b.price
			})
		)
	}, [products])

	const handleProducts = useCallback(async () => {
		try {
			setIsLoading(true)
			const data = await getProductsWithSearch(query)
			setProducts(data.products)
			setError('')
		} catch (error) {
			setError(error.response.data)
		} finally {
			setIsLoading(false)
		}
	}, [query])

	useEffect(() => {
		if (query) {
			handleProducts()
		}
	}, [handleProducts, query])

	useEffect(() => {
		const value = searchParams.get('search')
		if (value) setQuery(value)
	}, [searchParams])

	const handleSubmit = ({ query }) => {
		setQuery(query)
	}

	return (
		<>
			<button onClick={handleProducts}>click</button>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{/* <FormikSearchProducts submit={handleSubmit} /> */}
			<FormSearchProducts submit={handleSubmit} />
			{sortedProducts && <ProductsListWithSearch products={sortedProducts} />}
		</>
	)
}

export default ProductsPage
