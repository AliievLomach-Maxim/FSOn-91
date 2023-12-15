import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// const customMiddleWare = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			console.log('store :>> ', store)
// 			if (typeof action === 'function') {
// 				console.log('func')
// 				return action(store.dispatch)
// 			} else {
// 				return next(action)
// 			}
// 		}
// 	}
// }

export const store = configureStore({
	reducer,
	// middleware: () => [customMiddleWare],
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
