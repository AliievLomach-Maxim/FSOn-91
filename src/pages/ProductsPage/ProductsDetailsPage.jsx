import { useParams } from 'react-router-dom'

const ProductsDetailsPage = () => {
	const { idProduct } = useParams()
	console.log(idProduct)

	return <div>ProductsDetailsPage</div>
}

export default ProductsDetailsPage
