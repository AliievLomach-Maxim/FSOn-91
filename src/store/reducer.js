// import { combineReducers } from 'redux'
// import { todoReducer } from './todo/todoReducer'
import { todoReducer } from './todo/todoSlice'
import { userReducer } from './user/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { productsReducer } from './products/productsSlice'
import { usersReducer } from './users2/usersSlice'
import { rootReducer } from './root/rootSlice'
import { authReducer } from './auth/slice'

const persistConfig = {
	key: 'todo',
	storage,
	blacklist: ['secretKey'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

const persistConfigAuth = {
	key: 'token',
	storage,
	blacklist: ['user'],
}

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer)

export const reducer = {
	todo: persistedReducer,
	user: userReducer,
	products: productsReducer,

	users2: usersReducer,
	root: rootReducer,
	auth: persistedReducerAuth,
}
