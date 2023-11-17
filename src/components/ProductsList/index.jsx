import { Component } from 'react'
import { getProducts } from '../../api/products'
import Product from '../Product'

class ProductsList extends Component {
	state = {
		isLoading: false,
		error: '',
		products: null,
		isShowProducts: false,
	}

	// componentDidMount() {
	// 	this.handleProducts()
	// }

	componentDidUpdate(_, prevState) {
		prevState.isShowProducts !== this.state.isShowProducts &&
			(this.state.isShowProducts
				? this.handleProducts()
				: this.setState({ products: null }))

		// if(this.state.isShowProducts){
		//     if(prevState.isShowProducts !== this.state.isShowProducts){
		//         this.handleProducts()
		//     }
		// }
	}

	handleProducts = async () => {
		try {
			this.setState({ isLoading: true })
			const data = await getProducts()
			this.setState({ products: data.products, isLoading: false })
		} catch (error) {
			this.setState({ error: error.response.data, isLoading: false })
		}
		// finally{
		// 	this.setState({ isLoading: false })
		// }
	}

	handleClick = () => {
		this.setState((prev) => ({ isShowProducts: !prev.isShowProducts }))
	}

	render() {
		const { products, isLoading, error, isShowProducts } = this.state
		return (
			<>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				<button onClick={this.handleClick}>
					{isShowProducts ? 'Hide' : 'Show'}
				</button>
				{products &&
					products.map((product) => (
						<Product product={product} key={product.id} />
					))}
			</>
		)
	}
}

export default ProductsList

// {error && <Error error={error}/>}
// const Error = ({error}) => {
//   return (
//     {error.code === 404 && <img src="error404.png"/>}
//     {error.code === 404 && <h1>Server Error</h1>}
//   )
// }

// export default Error
