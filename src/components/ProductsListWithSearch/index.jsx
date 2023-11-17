import Product from '../Product'

import React from 'react'

const ProductsListWithSearch = ({ products }) => {
	return products.map((product) => (
		<Product product={product} key={product.id} />
	))
}

export default ProductsListWithSearch
