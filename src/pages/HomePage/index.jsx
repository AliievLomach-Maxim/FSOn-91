import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import { getAllProductsAction } from '../../store/products/productsSlice'

const action = () => {
	return { type: 'CLICK', payload: 10 }
}

const asyncAction = () => {
	return async (dispatch) => {
		// await fetch()
		dispatch({ type: 'new Type', payload: 10 })
	}
}

const HomePage = () => {
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(action())
	}
	const handleClickFunc = () => {
		dispatch(getAllProductsAction())
	}
	return (
		<>
			<button className='btn btn-success p-5' onClick={handleClickFunc}>
				get products
			</button>
			<button className='btn btn-success p-5' onClick={handleClick}>
				CLICK
			</button>
		</>
	)
}

export default HomePage
