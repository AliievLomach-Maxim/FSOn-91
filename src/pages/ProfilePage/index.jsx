import { useDispatch, useSelector } from 'react-redux'
import { profileSelector } from '../../store/auth/selectors'
import { useEffect, useState } from 'react'
import { updateProfileThunk } from '../../store/auth/thunks'

const ProfilePage = () => {
	const profile = useSelector(profileSelector)
	const [firstName, setFirstName] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		setFirstName(profile.firstName)
	}, [profile])

	const handleChange = ({ target: { value } }) => {
		setFirstName(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(updateProfileThunk({ body: { firstName }, id: profile._id }))
	}

	return (
		<div className='card' style={{ width: '500px' }}>
			<img src={profile.image} className='card-img-top' alt='img' />
			<div className='card-body'>
				<h5 className='card-title'>Email: {profile.email}</h5>

				<form onSubmit={handleSubmit}>
					<label>Name: </label>
					<br />
					<input type='text' value={firstName} onChange={handleChange} />
					<button class='btn btn-primary'>Update name</button>
				</form>
			</div>
		</div>
	)
}

export default ProfilePage
