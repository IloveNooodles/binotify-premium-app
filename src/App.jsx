import { Provider } from 'react-redux'
import { store } from './common/store'

import './index.css'
import Home from './home'

function App() {
	return (
		<Provider store={store}>
			<Home/>
		</Provider>
	)
}
export default App
