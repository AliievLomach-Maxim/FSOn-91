// import { combineReducers } from 'redux'
// import { todoReducer } from './todo/todoReducer'
import { todoReducer } from './todo/todoSlice'
import { userReducer } from './user/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
	key: 'todo',
	storage,
	blacklist: ['secretKey'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	todo: persistedReducer,
	user: userReducer,
}
// export const reducer = combineReducers({
// 	todo: todoReducer,
// 	user: userReducer,
// })
