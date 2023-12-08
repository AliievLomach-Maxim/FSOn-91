import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(reducer)
// export const store = createStore(reducer, { total: 0, user: [], todo: [] })

// import { createStore } from 'redux'

// const reducer = (state, action) => {
// 	if (action.type === 'increment') {
// 		return { ...state, total: action.payload }
// 	}
// 	if (action.type === 'createUser') {
// 		return { ...state, user: [...state.user, action.payload] }
// 	}
// 	return state
// }

// export const store = createStore(reducer, { total: 0, user: [], todo: [] })

// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'increment', payload: 10 })

// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'createUser', payload: 'Alex' })

// console.log('store :>> ', store.getState())

// // const [first, setfirst] = useState()

// export const rootReducer = (state = {}, action) => {
// 	// Повертаємо об'єкт стану
// 	return {
// 		// Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
// 		tasks: tasksReducer(state.tasks, action),
// 		filters: filtersReducer(state.filters, action),
// 	}
// }
