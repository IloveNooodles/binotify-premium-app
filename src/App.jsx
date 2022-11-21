import { Provider } from 'react-redux'
import { store } from './common/store'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './index.css'
import Login from './login'
import Register from './register'


function App() {
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
