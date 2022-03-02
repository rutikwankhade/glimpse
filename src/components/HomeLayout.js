import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const HomeLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex md:flex-row flex-col-reverse w-full justify-center ">

                <Sidebar />
                {children}

            </div>

        </div>
    );
}

export default HomeLayout;