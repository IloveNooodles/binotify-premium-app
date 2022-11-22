import { Provider } from 'react-redux'
import { store } from './common/store'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './index.css'
import Login from './login'
import Register from './register'
import Home from './home'
import { storage } from './common/storage'

function App() {
	if (storage.getToken() !== null) {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		)
	}
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
export default App
