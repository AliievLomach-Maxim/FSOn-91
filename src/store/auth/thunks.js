import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, registration, setToken, updateProfileApi } from '../../api/auth'

export const registerThunk = createAsyncThunk('auth/register', (body) => registration(body))

export const loginThunk = createAsyncThunk('auth/login', (body) => loginApi(body))

export const refreshThunk = createAsyncThunk('auth/refresh', (_, { getState }) => {
	getState().auth.token && setToken(getState().auth.token)
	return refreshApi()
})

export const updateProfileThunk = createAsyncThunk('users/update', ({body,id}) => updateProfileApi(body,id))