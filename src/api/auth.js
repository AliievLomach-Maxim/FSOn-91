import axios from 'axios'
export const api = axios.create({
	baseURL: 'https://practices-api.vercel.app/',
})

const setToken = (token) => {
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const registration = async (body) => {
	const { data } = await api.post('auth/signup', body)
	setToken(data.token)
	return data
}
