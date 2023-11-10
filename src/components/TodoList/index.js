import Todo from '../Todo'

const TodoList = ({ todo, deleteTodo }) => {
	return (
		<ul className='list-group'>
			{todo.map((el) => (
				<Todo key={el.id} todo={el} deleteTodo={deleteTodo} />
				// <Todo key={el.id} todo={el} deleteTodo={() => deleteTodo(el.id)} />
			))}
		</ul>
	)
}

export default TodoList
