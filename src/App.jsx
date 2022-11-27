import { Provider } from 'react-redux'
import { store } from './common/store'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './index.css'
import Login from './login'
import Register from './register'
import Home from './home'
import { storage } from './common/storage'
import InsertSong from './insertSong'

function App() {
	if (storage.getToken() !== null) {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/addsong" element={<InsertSong />} />
						<Route path="*" element={<Home />} />
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
					<Route path="*" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
export default App
