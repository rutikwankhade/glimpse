import '../styles/globals.css'
import store from '../app/store'
import { Provider} from 'react-redux'
import { SessionProvider } from "next-auth/react"

import Header from '../components/Header'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {



  return (
    <Provider store={store}>
      <SessionProvider session={session}>
      <Header />
      <div className="flex w-full">
        <Component {...pageProps} className="w-full overflow-scroll" />
        </div>
        </SessionProvider>
    </Provider>
  )

}

export default MyApp
