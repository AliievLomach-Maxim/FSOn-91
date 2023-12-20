import FormRegistration from '../../components/Forms/FormRegistration'
import { useDispatch, useSelector } from 'react-redux'
import { registerThunk } from '../../store/auth/thunks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const RegistrationPage = () => {
	const isAuth = useSelector((state) => state.auth.token)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const register = (body) => {
		dispatch(registerThunk(body))
	}

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	return <FormRegistration register={register} />
}

export default RegistrationPage
