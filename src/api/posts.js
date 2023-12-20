import { api } from './auth'

export const createPost = async (id, body) => {
	const { data } = await api.post(`users/${id}/posts`, body)
	return data
}

export const getAllPosts = async (id) => {
	const { data } = await api(`users/${id}/posts`)
	return data
}
