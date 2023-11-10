import { Component } from 'react'
// import Counter from './components/Counter/Counter'
// import Modal from './components/Modal/Modal'
import TodoList from './components/TodoList'
import CreateTodoForm from './components/Forms/CreateTodoForm'
import data from './todo.json'
import { nanoid } from 'nanoid'
import FormikCreateTodo from './components/Forms/FormikCreateTodo'

class App extends Component {
	state = {
		isShowModal: false,
		todo: data,
	}

	handleOpen = () => {
		this.setState({
			isShowModal: true,
		})
	}

	handleClose = () => {
		this.setState({
			isShowModal: false,
		})
	}

	addTodo = (newTodo) => {
		console.log('newTodo :>> ', newTodo)
		const todoObj = {
			...newTodo,
			id: nanoid(),
			completed: false,
		}
		this.setState((prev) => ({
			todo: [...prev.todo, todoObj],
		}))
	}

	deleteTodo = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.filter((el) => el.id !== id),
		}))
	}

	render() {
		return (
			<>
				{/* <button
					className='btn btn-success mx-auto my-5'
					onClick={this.handleOpen}
				>
					Open Modal
				</button>
				<div>
					<Counter />
					{this.state.isShowModal && (
						<Modal close={this.handleClose}>Some body</Modal>
					)}
				</div> */}
				<div className='container mt-5' style={{ width: 800 }}>
					<FormikCreateTodo addTodo={this.addTodo} />
					{/* <CreateTodoForm addTodo={this.addTodo} /> */}
					<TodoList todo={this.state.todo} deleteTodo={this.deleteTodo} />
				</div>
			</>
		)
	}
}

export default App
