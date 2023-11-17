import { Component } from 'react'
// import Modal from './components/Modal/Modal'
// import TodoList from './components/TodoList'
// import CreateTodoForm from './components/Forms/CreateTodoForm'
// import data from './todo.json'
// import { nanoid } from 'nanoid'
// import FormikCreateTodo from './components/Forms/FormikCreateTodo'
// import ProductsList from './components/ProductsList'
import FormikSearchProducts from './components/Forms/FormikSearchProducts'
import { getProductsWithSearch } from './api/products'
import ProductsListWithSearch from './components/ProductsListWithSearch'

class App extends Component {
	state = {
		query: '',
		isLoading: false,
		error: '',
		products: null,
	}

	componentDidUpdate(_, prevState) {
		if (prevState.query !== this.state.query) {
			this.handleProducts()
		}
	}

	handleProducts = async () => {
		try {
			this.setState({ isLoading: true })
			const data = await getProductsWithSearch(this.state.query)
			this.setState({ products: data.products, error: '', isLoading: false })
		} catch (error) {
			this.setState({ error: error.response.data, isLoading: false })
		}
	}

	handleSubmit = ({ query }) => {
		this.setState({ query })
	}

	render() {
		const { products, isLoading, error } = this.state
		return (
			<>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				<FormikSearchProducts submit={this.handleSubmit} />
				{products && <ProductsListWithSearch products={products} />}
			</>
		)
	}
}

export default App

// class App extends Component {
// 	state = {
// 		isShowModal: false,
// 		todo: null,
// 		isCreated: false,
// 		isDeleted: false,
// 		query:'',
// 	}

// 	handleOpen = () => {
// 		this.setState({
// 			isShowModal: true,
// 		})
// 	}

// 	handleClose = () => {
// 		this.setState({
// 			isShowModal: false,
// 		})
// 	}

// 	addTodo = (newTodo) => {
// 		const todoObj = {
// 			...newTodo,
// 			id: nanoid(),
// 			completed: false,
// 		}
// 		this.setState((prev) => ({
// 			todo: [...prev.todo, todoObj],
// 		}))
// 	}

// 	deleteTodo = (id) => {
// 		this.setState((prev) => ({
// 			todo: prev.todo.filter((el) => el.id !== id),
// 		}))
// 	}

// 	changeStatus = (id) => {
// 		this.setState(
// 			(prev) => ({
// 				todo: prev.todo.map((el) => {
// 					if (el.id === id) {
// 						return { ...el, completed: !el.completed }
// 					}
// 					return el
// 				}),
// 			}),
// 			() => localStorage.setItem('todo', JSON.stringify(this.state.todo))
// 		)
// 	}

// 	componentDidMount() {
// 		const localData = localStorage.getItem('todo')
// 		// if (localData && JSON.parse(localData).length)
// 		if (localData) this.setState({ todo: JSON.parse(localData) })
// 		else this.setState({ todo: data })
// 	}

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.todo) {
// 			if (prevState.todo.length > this.state.todo.length) {
// 				this.setState({ isDeleted: true })
// 				setTimeout(() => {
// 					this.setState({ isDeleted: false })
// 				}, 2000)
// 			}
// 			if (prevState.todo.length < this.state.todo.length) {
// 				this.setState({ isCreated: true })
// 				setTimeout(() => {
// 					this.setState({ isCreated: false })
// 				}, 2000)
// 			}
// 			prevState.todo.length !== this.state.todo.length &&
// 				localStorage.setItem('todo', JSON.stringify(this.state.todo))
// 		}
// 	}

// 	handleSubmit = ({ query }) => {
// 		this.setState({ query })
// 	}

// 	render() {
// 		return (
// 			<>
// 				{/* {this.state.isDeleted && (
// 					<div className='alert alert-danger' role='alert'>
// 						Deleted successfully
// 					</div>
// 				)}
// 				{this.state.isCreated && (
// 					<div className='alert alert-success' role='alert'>
// 						Created successfully
// 					</div>
// 				)}
// 				<button
// 					className='btn btn-success mx-auto my-5'
// 					onClick={this.handleOpen}
// 				>
// 					Open Modal
// 				</button>
// 				{this.state.isShowModal && (
// 					<Modal close={this.handleClose}>
// 						<FormikCreateTodo addTodo={this.addTodo} />
// 					</Modal>
// 				)}
// 				<div className='container mt-5' style={{ width: 800 }}>
// 					<CreateTodoForm addTodo={this.addTodo} />
// 					{this.state.todo && (
// 						<TodoList
// 							todo={this.state.todo}
// 							deleteTodo={this.deleteTodo}
// 							changeStatus={this.changeStatus}
// 						/>
// 					)}
// 				</div> */}
// 				<FormikSearchProducts submit={this.handleSubmit} />
// 				<ProductsList />
// 			</>
// 		)
// 	}
// }

// export default App
