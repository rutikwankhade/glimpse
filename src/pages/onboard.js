import Image from 'next/image'
import { useSelector, useDispatch } from "react-redux";


const OnBoardingPage = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className="w-full bg-gray-50 flex items-center p-20">

            <div className="rounded-xl p-10 border w-8/12 mx-auto flex flex-col justify-center bg-white">
                <img src={user && user.avatar} className="rounded-full w-24 h-24" />


            </div>




        </div>
    );
}

export default OnBoardingPage;