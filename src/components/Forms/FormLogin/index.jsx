import { Link } from 'react-router-dom'

const FormLogin = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className='card p-5 mx-auto' style={{ width: 500 }}>
			<form onSubmit={handleSubmit}>
				<Link type='button' className='btn btn-primary' to='/'>
					go home
				</Link>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
			</form>
			<Link to='/registration'>Registration</Link>
		</div>
	)
}

export default FormLogin
