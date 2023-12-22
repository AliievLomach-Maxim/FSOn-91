import FormRegistration from '../../components/Forms/FormRegistration'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../store/auth/thunks'

const RegistrationPage = () => {
	const dispatch = useDispatch()

	const register = (body) => {
		dispatch(registerThunk(body))
	}

	return <FormRegistration register={register} />
}

export default RegistrationPage
