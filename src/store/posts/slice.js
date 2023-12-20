import { createSlice } from '@reduxjs/toolkit'
import { getAllPostsThunk } from './thunks'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: null,
	},
	extraReducers: (builder) => {
		builder.addCase(getAllPostsThunk.fulfilled, (state, { payload }) => {
			state.posts = payload.posts
		})
	},
})

export const postsReducer = postsSlice.reducer
