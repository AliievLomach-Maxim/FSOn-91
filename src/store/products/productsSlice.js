import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts, getProductsWithSearch, getSingleProduct } from '../../api/products'

// export const getAllProductsAction = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(productsSlice.actions.productsPending())
// 			const data = await getProducts()
// 			dispatch(productsSlice.actions.productsFulfilled(data))
// 			// dispatch({ type: 'data', payload: data.products })
// 		} catch (error) {
// 			dispatch(productsSlice.actions.productsRejected(error))
// 		}
// 	}
// }


export const getAllProductsAction = createAsyncThunk('products/getAllProducts', async () => {
	const data = await getProducts()
	return data
})


export const getSingleProductAction = createAsyncThunk('products/getSingleProduct', () =>
	getSingleProduct()
)

// export const getProductsWithSearchAction = createAsyncThunk(
// 	'products/getProductsWithSearch',
// 	async (query, { rejectWithValue }) => {
// 		try {
// 			const data = await getProductsWithSearch(query)
// 			return data
// 		} catch (error) {
// 			console.log('error :>> ', error)
// 			return rejectWithValue(error.message)
// 		}
// 	}
// )
export const getProductsWithSearchAction = createAsyncThunk(
	'products/getProductsWithSearch',
	(query) => getProductsWithSearch(query)
)

const initialState = {
	products: null,
	singleProduct: null,

	// isLoading: false,
	// error: '',
}

// const handlePending = (state) => {
// 	state.isLoading = true
// 	state.error = ''
// }

// const handleRejected = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = payload
// }

// const handleFulfilled = (state, { payload }) => {
// 	state.isLoading = false
// }


const handleFulfilledAll = (state, { payload }) => {
	state.products = payload
}

const handleFulfilledSingle = (state, { payload }) => {
	state.singleProduct = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllProductsAction.fulfilled, handleFulfilledAll)
			.addCase(getSingleProductAction.fulfilled, handleFulfilledSingle)
			.addCase(getProductsWithSearchAction.fulfilled, handleFulfilledAll)

		// .addMatcher((action) => action.type.endsWith('pending'), handlePending)
		// .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
		// .addMatcher((action) => action.type.endsWith('fulfilled'), handleFulfilled)
	},
})

export const productsReducer = productsSlice.reducer
