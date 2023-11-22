import { useEffect, useState } from 'react'
import FormikSearchProducts from './components/Forms/FormikSearchProducts'
import { getProductsWithSearch } from './api/products'
import ProductsListWithSearch from './components/ProductsListWithSearch'

// function name(params) {
// 	return [value,fn]
// }

// const user = {
// 	name: 'Alex',
// 	age: 30,
// }

// const { name } = user
// // const name = user.name

// const user = ['Alex', 30]

// const name = user[0]
// const age = user[1]
// const [name,age] = user

const App = () => {
	const [query, setQuery] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [products, setProducts] = useState(null)

	// componentDidUpdate(_, prevState) {
	// 	if (prevState.query !== this.state.query) {
	// 		this.handleProducts()
	// 	}
	// }

	// CDM
	// useEffect(() => {
	// 	console.log('Mount')
	// }, [])
	// // CDU without if
	// useEffect(() => {
	// 	console.log('Mount')
	// })

	// useEffect(() => {
	// 	console.log('Update')
	// }, [query])
	// //CWU
	// useEffect(() => {
	// 	console.log('Update')
	// 	return ()=>console.log('return');
	// }, [query])

	useEffect(() => {
		if (query) {
			const handleProducts = async () => {
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
			}
			handleProducts()
		}
	}, [query])

	const handleSubmit = ({ query }) => {
		setQuery(query)
		// this.setState({ query })
	}

	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<FormikSearchProducts submit={handleSubmit} />
			{products && <ProductsListWithSearch products={products} />}
		</>
	)
}

export default App

// class App extends Component {
// state = {
// 	query: '',
// 	isLoading: false,
// 	error: '',
// 	products: null,
// }

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.query !== this.state.query) {
// 			this.handleProducts()
// 		}
// 	}

// 	handleProducts = async () => {
// 		try {
// this.setState({ isLoading: true })
// 			const data = await getProductsWithSearch(this.state.query)
// 			this.setState({ products: data.products, error: '', isLoading: false })
// 		} catch (error) {
// 			this.setState({ error: error.response.data, isLoading: false })
// 		}
// 	}

// 	handleSubmit = ({ query }) => {
// 		this.setState({ query })
// 	}

// 	render() {
// 		const { products, isLoading, error } = this.state
// 		return (
// 			<>
// 				{isLoading && <h1>Loading...</h1>}
// 				{error && <h1>{error}</h1>}
// 				<FormikSearchProducts submit={this.handleSubmit} />
// 				{products && <ProductsListWithSearch products={products} />}
// 			</>
// 		)
// 	}
// }

// export default App
