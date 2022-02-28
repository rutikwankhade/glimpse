import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SearchBar from './Searchbar'
import { Popover } from '@headlessui/react'
import settingsIcon from '../assets/icons/settings.svg'
import userIcon from '../assets/icons/user.svg'
import logoutIcon from '../assets/icons/logout.svg'
import { logout } from "../app/features/authSlice";
import { useRouter } from "next/router";

const Header = () => {
    const { user, userId, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const router = useRouter()

    const signout = () => {
        dispatch(logout())
        router.push('/')
    }

    return (
        <div className="sticky z-20 top-0 bg-white flex items-center p-4 h-max px-20">


            <Link href="/">
                <a className="text-xl font-bold font-serif italic">Glimpse</a>
            </Link>



            <div className="w-full">

                {isAuthenticated
                    ?
                    <div className="flex flex-row items-center w-full">
                        <SearchBar />

                        <span className="text-xl mx-2 mb-2 font-semibold">{ user.username}</span>


                        <Popover className="relative inline-block">
                            <Popover.Button>
                                <Image src={user.avatar}
                                    className="rounded-full"
                                    height="40" width="40" />
                            </Popover.Button>

                            <Popover.Panel className="absolute z-10 text-md font-semibold text-gray-600 right-0 bg-white p-4 border w-44 shadow-lg rounded-xl">
                                <div className="flex flex-col">

                                    <Link href={`/profile/${userId}`}>
                                        <a className="flex hover:bg-gray-50 items-center p-2">
                                            <Image src={userIcon} />
                                            <span className="mx-2">My Profile</span>
                                        </a>
                                    </Link>


                                    <Link href="/settings">
                                        <a className="flex hover:bg-gray-50 items-center p-2 ">
                                            <Image src={settingsIcon} />
                                            <span className="mx-2">Setings</span>
                                        </a>
                                    </Link>


                                    <button
                                        onClick={() => signout()}
                                        className="flex hover:bg-gray-50 items-center p-2">
                                        <Image src={logoutIcon} />
                                        <span className="mx-2 text-md font-semibold">Log out</span>
                                    </button>

                                </div>

                            </Popover.Panel>
                        </Popover>
                    </div>

                    :
                    <div className=" w-40 ml-auto mr-4">
                        <Link href="/login" >
                            <a className="bg-white border-2 border-gray-800 px-6 text-xl font-bold p-1 hover:bg-gray-50 rounded-full ">Log In</a>
                        </Link>
                    </div>
                }

            </div>

        </div>
    );
}

export default Header;