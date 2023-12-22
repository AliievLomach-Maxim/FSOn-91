import { Route, Routes } from 'react-router-dom'
// import ProductsDetailsPage from './pages/ProductsPage/ProductsDetailsPage'
import Layout from './layout'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'
import Loader from './components/Loader'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import { Toaster } from 'react-hot-toast'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './guards/PrivateRoute'
import PublicRoute from './guards/PublicRoute'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const ProductsDetailsPage = lazy(() => import('./pages/ProductsPage/ProductsDetailsPage'))

const App = () => {
	return (
		<>
			<PersistGate loading={null} persistor={persistor}>
				<Provider store={store}>
					<Suspense fallback={<p>loading component...</p>}>
						<Loader />
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<HomePage />} />
								<Route
									path='products'
									element={
										<PrivateRoute>
											<ProductsPage />
										</PrivateRoute>
									}
								/>
								<Route path='products/:id' element={<ProductsDetailsPage />} />
								<Route path='todo' element={<TodoPage />} />
								<Route
									path='profile'
									element={
										<PrivateRoute>
											<ProfilePage />
										</PrivateRoute>
									}
								/>
							</Route>
							<Route
								path='/login'
								element={
									<PublicRoute>
										<LoginPage />
									</PublicRoute>
								}
							/>
							<Route
								path='/registration'
								element={
									<PublicRoute>
										<RegistrationPage />
									</PublicRoute>
								}
							/>
						</Routes>
					</Suspense>
				</Provider>
			</PersistGate>
			<Toaster position='top-right' />
		</>
	)
}
export default App
