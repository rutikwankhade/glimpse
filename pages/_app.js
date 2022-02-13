import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return <div className="flex">
    <Sidebar className="w-3/12"/>
    <Component {...pageProps} className="w-full" />
    </div> 
}

export default MyApp
