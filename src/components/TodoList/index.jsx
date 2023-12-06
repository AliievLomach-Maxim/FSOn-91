import { useSelector, useDispatch } from 'react-redux'
import Todo from '../Todo'
import CreateTodoForm from '../Forms/CreateTodoForm'
import { addTodoAction } from '../../store/todo/actions'
// import todo from '../../todo.json'

const TodoList = () => {
	// const { todo } = useSelector((state) => {
	// 	// return state.todo
	// 	return state
	// })
	const { todo } = useSelector((state) => state.todo)

	const dispatch = useDispatch()

	const addTodo = (todo) => {
		// const newTodo = {
		// 	...todo,
		// 	id: nanoid(),
		// 	completed: false,
		// }
		// dispatch({ type: 'addTodo', payload: newTodo })
		dispatch(addTodoAction(todo))
	}

	return (
		<>
			<CreateTodoForm addTodo={addTodo} />
			<ul className='list-group'>
				{todo.map((el) => (
					<Todo
						key={el.id}
						todo={el}
						// deleteTodo={deleteTodo}
						// changeStatus={changeStatus}
					/>
				))}
			</ul>
		</>
	)
}

export default TodoList
