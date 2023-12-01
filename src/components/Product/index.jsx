import { Link, useLocation } from 'react-router-dom'

const Product = ({ product, isDetails }) => {
	const location = useLocation()
	console.log('location :>> ', location)
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<a href='-' className='btn btn-primary'>
					{product.price}
				</a>
				{!isDetails && (
					<Link to={product.id.toString()} state={location}>
						Details
					</Link>
				)}
			</div>
		</div>
	)
}

export default Product
