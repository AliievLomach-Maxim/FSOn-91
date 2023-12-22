import { useSelector } from 'react-redux'
import { authSelector } from '../store/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const isAuth = useSelector(authSelector)

	const location = useLocation()

	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

export default PublicRoute
