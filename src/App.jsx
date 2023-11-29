import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import TodoPage from './pages/TodoPage'
import Layout from './Layout'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<ProductsPage />} />
				<Route path='todo' element={<TodoPage />} />
			</Route>
		</Routes>
	)
}

export default App
