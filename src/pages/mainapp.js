import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../components/Header'
import { loadUser } from '../app/features/authSlice'
import setAuthToken from '../utils/setAuthToken'


function MainApp({ Component, pageProps: { session, ...pageProps } }) {

    const dispatch = useDispatch()


    useEffect(() => {

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        dispatch(loadUser());
    }, [])


    return (
        <div>
            <Header />
            <div className="flex w-full">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MainApp