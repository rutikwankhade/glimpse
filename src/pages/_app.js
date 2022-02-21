import '../styles/globals.css'
import store from '../app/store'
import { Provider } from 'react-redux'

import Header from '../components/Header'
function MyApp({ Component, pageProps }) {

  return (
  <Provider store={store}>
    <Header />
    <div className="flex w-full">
      <Component {...pageProps} className="w-full overflow-scroll" />
    </div>
    </Provider>
  )

}

export default MyApp
