import '../styles/globals.css'
import MainApp from './mainapp'
import { Provider } from 'react-redux'
import store from '../app/store'

function MyApp(props) {

  return (
    <Provider store={store}>
      <MainApp {...props} />
    </Provider>
  )
}

export default MyApp
