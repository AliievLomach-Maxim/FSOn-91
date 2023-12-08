import { initialState } from './initialState'

export const userReducer = (state = initialState, action) => {
	if (action.type === 'createUser') {
		return { ...state, user: [...state.user, action.payload] }
	}
	return state
}
