// import { useContext } from 'react'
import {
	// GlobalContext,
	// GlobalContext2,
	useGlobalContext,
} from '../../context/GlobalContext'
// import { GlobalContext, GlobalContext2 } from '../../App'

const Product = ({ product }) => {
	// const context = useContext(GlobalContext)
	const context = useGlobalContext()
	// const context2 = useContext(GlobalContext2)
	console.log('context :>> ', context)
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<a href='-' className='btn btn-primary'>
					{product.price}
				</a>
			</div>
		</div>
	)
}

export default Product
