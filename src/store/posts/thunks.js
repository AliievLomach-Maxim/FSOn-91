import { createAsyncThunk } from '@reduxjs/toolkit'
import { createPost, getAllPosts } from '../../api/posts'

export const getAllPostsThunk = createAsyncThunk('posts/getAll', (id) => getAllPosts(id))
export const createPostThunk = createAsyncThunk('posts/createSingle', ({id,body}) => createPost(id,body))
