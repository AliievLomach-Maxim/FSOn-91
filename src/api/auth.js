import axios from 'axios'
export const api = axios.create({
	baseURL: 'https://practices-api.vercel.app/',
})

export const setToken = (token) => {
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const removeToken = () => {
	delete api.defaults.headers.common['Authorization']
}

export const registration = async (body) => {
	const { data } = await api.post('auth/signup', body)
	setToken(data.token)
	return data
}

export const loginApi = async (body) => {
	const { data } = await api.post('auth/login', body)
	setToken(data.token)
	return data
}

export const refreshApi = async () => {
	const { data } = await api('auth/refresh')
	setToken(data.token)
	return data
}

export const updateProfileApi = async (body, id) => {
	const { data } = await api.put(`users/${id}`, body)
	return data
}
