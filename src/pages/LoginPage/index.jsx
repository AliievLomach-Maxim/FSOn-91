import FormLogin from '../../components/Forms/FormLogin'
import { loginThunk } from '../../store/auth/thunks'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

const LoginPage = () => {
	const dispatch = useDispatch()

	const login = async (body) => {
		try {
			await dispatch(loginThunk(body)).unwrap()
			toast.success('Login successfully')
		} catch (error) {
			toast.error(error.message)
		}
	}

	return <FormLogin login={login} />
}

export default LoginPage
// import FormLogin from '../../components/Forms/FormLogin'
// import { loginThunk } from '../../store/auth/thunks'
// import { useDispatch } from 'react-redux'
// import toast from 'react-hot-toast'

// const LoginPage = () => {
// 	// const isAuth = useSelector(authSelector)
// 	// const error = useSelector((state) => state.root.error)

// 	const dispatch = useDispatch()
// 	// const navigate = useNavigate()

// 	// const login = (body) => {
// 	// 	dispatch(loginThunk(body))
// 	// 		.unwrap()
// 	// 		.then(() => {})
// 	// 		.catch((error) => toast.error(error.message))
// 	// }
// 	const login = async (body) => {
// 		try {
// 			await dispatch(loginThunk(body)).unwrap()
// 			toast.success('Login successfully')
// 		} catch (error) {
// 			toast.error(error.message)
// 		}
// 	}

// 	// useEffect(() => {
// 	// 	isAuth && navigate('/')
// 	// }, [isAuth, navigate])

// 	// useEffect(() => {
// 	// 	error && toast.error('Error')
// 	// }, [error])

// 	return <FormLogin login={login} />
// }

// export default LoginPage
