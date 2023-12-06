import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
// import ProductsDetailsPage from './pages/ProductsPage/ProductsDetailsPage'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const ProductsDetailsPage = lazy(() => import('./pages/ProductsPage/ProductsDetailsPage'))

const App = () => {
	return (
		<Provider store={store}>
			<Suspense fallback={<p>loading component...</p>}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='products' element={<ProductsPage />} />
						<Route path='products/:id' element={<ProductsDetailsPage />} />
						<Route path='todo' element={<TodoPage />} />
					</Route>
				</Routes>
			</Suspense>
		</Provider>
	)
}
export default App
