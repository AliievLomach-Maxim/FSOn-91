import axios from 'axios'
axios.defaults.baseURL = 'https://dummyjson.com/products'

export const getProducts = async () => {
	const { data } = await axios()
	return data
}

export const getSingleProduct = async (id) => {
	const { data } = await axios(`/${id}`)
	return data
}

export const getProductsWithSearch = async (query) => {
	const { data } = await axios(`/search?q=${query}`)
	return data
}
