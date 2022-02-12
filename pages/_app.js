import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return <div className="flex">
    <Sidebar/>
    <Component {...pageProps} />
    </div> 
}

export default MyApp
