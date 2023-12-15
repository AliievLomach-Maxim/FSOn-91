import { createSlice } from '@reduxjs/toolkit'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	// console.log('action :>> ', action)
	state.error = error.message
}

const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
}
const rootSlice = createSlice({
	name: 'root',
	initialState: {
		isLoading: false,
		error: '',
	},
	extraReducers: (builder) => {
		builder
			.addMatcher((action) => action.type.endsWith('pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
			.addMatcher((action) => action.type.endsWith('fulfilled'), handleFulfilled)
	},
})

export const rootReducer = rootSlice.reducer
