import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import FormikSearchProducts from './components/Forms/FormikSearchProducts'
import { getProductsWithSearch } from './api/products'
import ProductsListWithSearch from './components/ProductsListWithSearch'
import GlobalContextProvider from './context/GlobalContext'

// export const GlobalContext = createContext()
// export const GlobalContext2 = createContext()

const App = () => {
	const [query, setQuery] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [products, setProducts] = useState(null)
	const [counter, setCounter] = useState(0)
	// const result = useMemo(() => {}, [])

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

	const handleSubmit = ({ query }) => {
		setQuery(query)
	}

	// const ref = useRef()
	// console.log(ref)
	return (
		<>
			{/* <GlobalContext.Provider value={{ counter, setCounter }}>
				<GlobalContext2.Provider value={100000}> */}
			<GlobalContextProvider>
				{/* <input type='text' ref={ref} />
			<button onClick={() => ref.current.focus()}>click REF</button> */}
				<button onClick={handleProducts}>click</button>
				<button onClick={() => setCounter((prev) => prev + 1)}>
					{counter}
				</button>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				<FormikSearchProducts submit={handleSubmit} />
				{sortedProducts && <ProductsListWithSearch products={sortedProducts} />}
				{/* {products && <ProductsListWithSearch products={products} />} */}
				{/* </GlobalContext2.Provider>
			</GlobalContext.Provider> */}
			</GlobalContextProvider>
		</>
	)
}

export default App
