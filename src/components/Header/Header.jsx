import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
			</div>
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
				</ul>
			</div>
		</nav>
	)
}

export default Header
