import { useSelector } from 'react-redux'

const Loader = () => {
	const { isLoading } = useSelector((state) => state.root)
	return isLoading && <h1>Loading...</h1>
}

export default Loader
