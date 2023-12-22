import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { authSelector, profileSelector } from '../../store/auth/selectors'
import { logOut } from '../../store/auth/slice'
import { removeToken } from '../../api/auth'

const Header = () => {
	const isAuth = useSelector(authSelector)
	const profile = useSelector(profileSelector)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		if (isAuth) {
			dispatch(logOut())
			removeToken()
		} else navigate('/login')
	}

	const handleProfile = () => {
		navigate('/profile')
	}

	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
			</div>
			{profile && (
				<h4 className='text-danger' onClick={handleProfile}>
					{profile.firstName}
				</h4>
			)}
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
					<li className='nav-item'>
						<NavLink className='nav-link text-white' aria-current='page' to='/'>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link text-white' to='/products'>
							Products
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link text-white' to='/todo'>
							Todo
						</NavLink>
					</li>
					<li className='nav-item '>
						<button onClick={handleClick} className='nav-link text-danger'>
							{isAuth ? 'LogOut' : 'LogIn'}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
