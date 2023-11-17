import { Component } from 'react'
import Todo from '../Todo'

class TodoList extends Component {
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
				))}
			</ul>
		)
	}
}

export default TodoList
