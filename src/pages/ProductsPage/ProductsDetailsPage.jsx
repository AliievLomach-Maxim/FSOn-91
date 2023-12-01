import { useCallback, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../api/products'
import Product from '../../components/Product'

const ProductsDetailsPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const location = useLocation()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [product, setProduct] = useState(null)

	const handleProduct = useCallback(async () => {
		try {
			setIsLoading(true)
			const data = await getSingleProduct(id)
			setProduct(data)
			setError('')
		} catch (error) {
			setError(error.response.data)
		} finally {
			setIsLoading(false)
		}
	}, [id])

	useEffect(() => {
		id && handleProduct()
	}, [handleProduct, id])

	const handleClick = () => {
		navigate(location.state, { state: 'qrwety' })
	}
	return (
		<>
			{isLoading && 'loading...'}
			{error && 'error...'}
			{/* <Link to={location.state}>Back</Link> */}

			{/* {isLogin ? <HomePage /> : <Navigate to={'/login'} />} */}
			<Navigate to={'/'} />
			<button onClick={handleClick}>back</button>
			{product && <Product product={product} isDetails />}
		</>
	)
}

export default ProductsDetailsPage
