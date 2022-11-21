import { Provider } from 'react-redux'
import { store } from './common/store'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './index.css'
import Login from './login'
import Register from './register'
import Home from './home'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
export default App
