import { createSlice } from '@reduxjs/toolkit'
import { registerThunk } from './thunks'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: '',
		user: null,
	},
	extraReducers: (builder) => {
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.token = payload.token
			state.user = payload.user
		})
	},
})

export const authReducer = authSlice.reducer
