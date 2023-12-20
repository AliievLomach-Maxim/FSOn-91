import { Route, Routes } from 'react-router-dom'
// import ProductsDetailsPage from './pages/ProductsPage/ProductsDetailsPage'
import Layout from './layout'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'
import Loader from './components/Loaer'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PostsPage from './pages/PostsPage'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const ProductsDetailsPage = lazy(() => import('./pages/ProductsPage/ProductsDetailsPage'))

const App = () => {
	return (
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<Suspense fallback={<p>loading component...</p>}>
					<Loader />
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path='products' element={<ProductsPage />} />
							<Route path='products/:id' element={<ProductsDetailsPage />} />
							<Route path='todo' element={<TodoPage />} />
							<Route path='posts' element={<PostsPage />} />
						</Route>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/registration' element={<RegistrationPage />} />
					</Routes>
				</Suspense>
			</Provider>
		</PersistGate>
	)
}
export default App
