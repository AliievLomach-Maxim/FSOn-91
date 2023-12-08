import { useDispatch } from 'react-redux'
import { deleteTodoAction } from '../../store/todo/todoSlice'
// import { deleteTodoAction } from '../../store/todo/actions'

const Todo = ({
	todo,
	// deleteTodo, changeStatus
}) => {
	const dispatch = useDispatch()
	const deleteTodo = (id) => {
		// dispatch({ type: 'deleteTodo', payload: id })
		dispatch(deleteTodoAction(id))
	}
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<div>
				<p>{todo.title}</p>
				<p>{todo.description}</p>
			</div>
			<div className='d-flex justify-content-between'>
				<button
					className='btn btn-warning ms-4'
					// onClick={() => changeStatus(todo.id)}
				>
					{todo.completed.toString()}
				</button>
				<button className='btn btn-danger ms-4' onClick={() => deleteTodo(todo.id)}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Todo
