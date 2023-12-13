// import { combineReducers } from 'redux'
// import { todoReducer } from './todo/todoReducer'
import { todoReducer } from './todo/todoSlice'
import { userReducer } from './user/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { productsReducer } from './products/productsSlice'

const persistConfig = {
	key: 'todo',
	storage,
	blacklist: ['secretKey'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	todo: persistedReducer,
	user: userReducer,
	products: productsReducer,
}
// export const reducer = combineReducers({
// 	todo: todoReducer,
// 	user: userReducer,
// })
