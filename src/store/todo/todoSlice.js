import { createSlice, nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todo: [],
		secretKey: '',
	},
	reducers: {
		addTodoAction: {
			// Модифікація обʼєкту перед записом у стейт
			prepare: (todo) => {
				return { payload: { ...todo, id: nanoid(), completed: false } }
			},
			reducer: (state, action) => {
				state.todo.push(action.payload)
			},
			// reducer: (state, action) => {
			// 	return { ...state, todo: [...state.todo, action.payload] }
			// },
		},
		deleteTodoAction: (state, action) => {
			state.todo = state.todo.filter((el) => el.id !== action.payload)
		},
		// deleteTodoAction: (state, action) => {
		// 	return { ...state, todo: state.todo.filter((el) => el.id !== action.payload) }
		// },
	},
})

export const { addTodoAction, deleteTodoAction } = todoSlice.actions

export const todoReducer = todoSlice.reducer
