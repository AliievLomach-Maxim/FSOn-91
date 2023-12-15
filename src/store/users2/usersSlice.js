import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts, getProductsWithSearch, getSingleProduct } from '../../api/products'

export const getAllProductsAction = createAsyncThunk('products/getAllProducts', async () => {
	const data = await getProducts()
	return data
})

export const getSingleProductAction = createAsyncThunk('products/getSingleProduct', async () => {
	const data = await getSingleProduct()
	return data
})

export const getProductsWithSearchAction = createAsyncThunk(
	'products/getProductsWithSearch',
	async (query) => {
		const data = await getProductsWithSearch(query)
		return data
	}
)

const initialState = {
	users: null,
	isLoading: false,
	error: '',
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
}

const handleFulfilledAll = (state, { payload }) => {
	state.products = payload
}

const productsSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllProductsAction.fulfilled, handleFulfilledAll)
			.addCase(getProductsWithSearchAction.fulfilled, handleFulfilledAll)
			.addMatcher((action) => action.type.endsWith('pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
			.addMatcher((action) => action.type.endsWith('fulfilled'), handleFulfilled)
	},
})

export const usersReducer = productsSlice.reducer
