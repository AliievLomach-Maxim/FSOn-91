import { initialState } from './initialState'
import { ADD_TODO, DELETE_TODO } from './types'

export const todoReducer = (state = initialState, action) => {
	if (action.type === ADD_TODO) {
		return { ...state, todo: [...state.todo, action.payload] }
	}
	if (action.type === DELETE_TODO) {
		return { ...state, todo: state.todo.filter((el) => el.id !== action.payload) }
	}
	return state
}
