import Link from "next/link";
import avatarIcon from '../assets/images/avatar.png'
import Image from "next/image";
import { useSelector } from "react-redux";

const Header = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);


    return (
        <div className=" ">
            <div className="flex items-center  p-4 w-10/12 mx-auto">

                <Link href="/">
                    <a className="text-xl font-bold font-serif italic">Glimpse</a>
                </Link>

                {isAuthenticated
                    ?
                    <div className="flex items-center ml-auto mr-10">
                        <span className="text-xl px-8 mr-4 font-semibold">{user?.username} </span>
                        <Image src={avatarIcon} className=" px-4 border-white border-2 rounded-full"
                            height="40"
                            width="40"
                        />

                    </div>
                    :
                    <div className="flex items-center ml-auto mr-10">
                        <Link href="/login">
                            <button className="bg-white text-xl font-bold p-2 rounded-full px-6 ml-auto mr-4">                            Log In
                            </button>
                        </Link>
                    </div>
                }




            </div>


            <div className="mx-auto">
                {/* <Link href="/bookclub" >
                    <a className="text-xl flex rounded align-baseline font-semibold font-sans">
                        <span>📖</span><span >Books</span>
                    </a>
                </Link> */}

            </div>




        </div>
    );
}

export default Header;