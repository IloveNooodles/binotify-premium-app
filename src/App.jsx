import { Provider } from 'react-redux'
import { store } from './common/store'

import './index.css'
import Login from './login'


function App() {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  )
}
export default App
