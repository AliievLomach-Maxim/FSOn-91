import { useEffect, useState } from 'react'

import ProductsListWithSearch from '../../components/ProductsListWithSearch'
import FormSearchProducts from '../../components/Forms/FormSearchProducts'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsWithSearchAction } from '../../store/products/productsSlice'
import { selectError, selectLoading, selectProducts } from '../../store/products/selectors'

const ProductsPage = () => {
	const [query, setQuery] = useState('')
	const [counter, setCounter] = useState(0)
	const [searchParams] = useSearchParams()
	const dispatch = useDispatch()
	// const isLoading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const sortedProducts = useSelector(selectProducts)

	// const sortedProducts = useMemo(() => {
	// 	return (
	// 		products &&
	// 		products.products.toSorted((a, b) => {
	// 			console.log('sorting')
	// 			// for (let i = 0; i < 10000000; i++) {}
	// 			return a.price - b.price
	// 		})
	// 	)
	// }, [products])

	useEffect(() => {
		if (query) {
			dispatch(getProductsWithSearchAction(query))
		}
	}, [dispatch, query])

	useEffect(() => {
		const value = searchParams.get('search')
		if (value) setQuery(value)
	}, [searchParams])

	const handleSubmit = ({ query }) => {
		setQuery(query)
	}

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			{/* {isLoading && <h1>Loading...</h1>} */}
			{error && <h1>{error}</h1>}
			<FormSearchProducts submit={handleSubmit} />
			{sortedProducts && <ProductsListWithSearch products={sortedProducts} />}
		</>
	)
}

export default ProductsPage
