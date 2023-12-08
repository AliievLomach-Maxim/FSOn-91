import { nanoid } from 'nanoid'
import { createAction } from '@reduxjs/toolkit'

export const deleteTodoAction = createAction('DELETE_TODO')

export const addTodoAction = createAction('ADD_TODO', (todo) => {
	const newTodo = {
		...todo,
		id: nanoid(),
		completed: false,
	}
	return { payload: newTodo }
})

console.log(addTodoAction.toString())
