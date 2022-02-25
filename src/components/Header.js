import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import SearchBar from './Searchbar'
import avatarIcon from '../assets/images/avatar.png'

const Header = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);


    return (
        <div>
            <div className="flex items-center justify-evenly  p-4 w-10/12 mx-auto">

                <Link href="/">
                    <a className="text-xl font-bold font-serif italic">Glimpse</a>
                </Link>

                <SearchBar />

                <div className="ml-auto mr-4">
                    {isAuthenticated
                        ?
                        <div className="flex items-center ">
                            <span className="text-xl px-8 mr-4 font-semibold">{user?.username} </span>

                            <Link href={`/profile/${user._id}`} >
                                <Image src={avatarIcon} className="h-10 w-10 px-4 border-white border-2 rounded-full"
                                    height="80"
                                    width="80"
                                />

                            </Link>
                        </div>
                        :
                        <div className="w-max ">
                            <Link href="/login" >
                                <a className="bg-white text-xl font-bold p-2 rounded-full ">Log In</a>
                            </Link>
                        </div>
                    }

                </div>




            </div>

        </div>
    );
}

export default Header;