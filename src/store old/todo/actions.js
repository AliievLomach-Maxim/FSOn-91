import { nanoid } from 'nanoid'
import { ADD_TODO, DELETE_TODO } from './types'

export const deleteTodoAction = (id) => {
	return { type: DELETE_TODO, payload: id }
}

export const addTodoAction = (todo) => {
	const newTodo = {
		...todo,
		id: nanoid(),
		completed: false,
	}
	return { type: ADD_TODO, payload: newTodo }
}
