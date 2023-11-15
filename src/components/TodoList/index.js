import { Component } from 'react'
import Todo from '../Todo'

class TodoList extends Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (
	// 		nextProps.todo.length !== this.props.todo.length ||
	// 		nextProps.deleteTodo !== this.props.deleteTodo
	// 	)
	// 		return true
	// 	return false
	// }
	render() {
		console.log('render')
		const { todo, deleteTodo, changeStatus } = this.props

		return (
			<ul className='list-group'>
				{todo.map((el) => (
					<Todo
						key={el.id}
						todo={el}
						deleteTodo={deleteTodo}
						changeStatus={changeStatus}
					/>
					// <Todo key={el.id} todo={el} deleteTodo={() => deleteTodo(el.id)} />
				))}
			</ul>
		)
	}
}

export default TodoList
