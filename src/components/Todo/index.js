const Todo = ({ todo, deleteTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<div>
				<p>{todo.title}</p>
				<p>{todo.description}</p>
			</div>
			<div className='d-flex justify-content-between'>
				<p>{todo.completed.toString()}</p>
				<button
					className='btn btn-danger ms-4'
					onClick={() => deleteTodo(todo.id)}
					// onClick={deleteTodo}
				>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Todo
