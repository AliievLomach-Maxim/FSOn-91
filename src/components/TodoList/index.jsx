import { useSelector, useDispatch } from 'react-redux'
import Todo from '../Todo'
import CreateTodoForm from '../Forms/CreateTodoForm'
import { addTodoAction } from '../../store/todo/todoSlice'
import { useState } from 'react'

const selector = (state) => {
	console.log('select')
	return state.todo
}

const TodoList = () => {
	const { todo } = useSelector(selector)

	const [counter, setCounter] = useState(0)

	const dispatch = useDispatch()

	const addTodo = (todo) => {
		dispatch(addTodoAction(todo))
	}

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			<CreateTodoForm addTodo={addTodo} />
			<ul className='list-group'>
				{todo.map((el) => (
					<Todo key={el.id} todo={el} />
				))}
			</ul>
		</>
	)
}

export default TodoList
