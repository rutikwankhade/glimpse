import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../components/Header'
import { loadUser } from '../app/features/authSlice'
import setAuthToken from '../utils/setAuthToken'

function MainApp({ Component, pageProps: { session, ...pageProps } }) {

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
        <div className="w-full">
                            {/* <Header /> */}

            <div className="w-full">

                    <Component {...pageProps} />
                </div>
        </div>
    )
}

export default MainApp