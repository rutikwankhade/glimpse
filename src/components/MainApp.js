import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'
import { loadUser } from '../app/features/authSlice'
import setAuthToken from '../utils/setAuthToken'
import Head from 'next/head'
import favicon from '../../public/images/favicon.png';

function MainApp({ Component, pageProps: { ...pageProps } }) {

    const dispatch = useDispatch()
    // const Layout = Component.layout || (children => <>{children}</>)
    const getLayout = Component.getLayout || (page => page)

    useEffect(() => {

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        dispatch(loadUser());
    }, [])


    return getLayout(
        <div className="w-full font-manrope">
            <Head>
                <title>bookclub</title>
                <link rel="icon" href={favicon.src} />
            </Head>
            {/* <Header /> */}
            <div className="w-full">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MainApp