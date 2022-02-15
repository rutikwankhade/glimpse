import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  return <div >
    <Header/>

    <div className="flex w-full">
       {/* <Sidebar className=" bg-gray-50 fixed top-0"/> */}
    <Component {...pageProps} className="w-full overflow-scroll" />

    </div>
   
    </div> 
}

export default MyApp
