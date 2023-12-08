import { combineReducers } from 'redux'
import { todoReducer } from './todo/todoReducer'
import { userReducer } from './user/userReducer'

export const reducer = combineReducers({
	todo: todoReducer,
	user: userReducer,
})
