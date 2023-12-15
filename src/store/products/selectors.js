// import { createSelector } from '@reduxjs/toolkit'

export const selectProducts = (state) => {
	return (
		state.products.products &&
		state.products.products.products.toSorted((a, b) => {
			console.log('sorting')
			// for (let i = 0; i < 10000000; i++) {}
			return a.price - b.price
		})
	)
}

export const selectLoading = (state) => state.products.isLoading

export const selectError = (state) => state.products.error

// const filterSele = (state) => state.filterQuery
// const productsSele = (state) => state.products

// const initial = {
// 	products: [],
// 	filterQuery: '',
// }

// const rootSelector = createSelector(filterSele, productsSele,(valueFilter,valueProducts)=>{
//     return valueProducts.filter(el=>el.name.includes(valueFilter))
// })
