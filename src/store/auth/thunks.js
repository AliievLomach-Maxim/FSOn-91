import { createAsyncThunk } from '@reduxjs/toolkit'
import { registration } from '../../api/auth'

export const registerThunk = createAsyncThunk('auth/register', (body) => registration(body))
