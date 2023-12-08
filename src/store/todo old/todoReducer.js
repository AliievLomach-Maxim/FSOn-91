import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { addTodoAction, deleteTodoAction } from './actions'

export const todoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addTodoAction, (state, action) => {
			return { ...state, todo: [...state.todo, action.payload] }
		})
		.addCase(deleteTodoAction, (state, action) => {
			return { ...state, todo: state.todo.filter((el) => el.id !== action.payload) }
		})
})
