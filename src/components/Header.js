import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import SearchBar from './Searchbar'
import { Menu, Popover } from '@headlessui/react'
import settingsIcon from '../assets/icons/settings.svg'
import userIcon from '../assets/icons/user.svg'
import logoutIcon from '../assets/icons/logout.svg'


const Header = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);


    return (
        <div className="flex  p-4 h-max w-10/12 mx-auto">

            <div className="flex w-full">
                <Link href="/">
                    <a className="text-xl font-bold font-serif italic">Glimpse</a>
                </Link>

                <SearchBar />
            </div>

            <div className="">

                {isAuthenticated
                    ?
                    <Popover className="relative inline-block">
                        <Popover.Button>
                            <Image src={user.avatar}
                                className="rounded-full"
                                height="40" width="40" />
                        </Popover.Button>

                        <Popover.Panel className="absolute z-10 text-md font-semibold text-gray-600 right-0 bg-white p-4 border w-44 shadow-lg rounded-xl">
                            <div className="flex flex-col">

                                <Link href="/profile">
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


                                <button className="flex hover:bg-gray-50 items-center p-2">
                                    <Image src={logoutIcon} />
                                    <span className="mx-2 text-md font-semibold">Log out</span>
                                </button>

                            </div>

                        </Popover.Panel>
                    </Popover>

                    :
                    <div className=" ">
                        <Link href="/login" >
                            <a className="bg-white text-xl font-bold p-2 rounded-full ">Log In</a>
                        </Link>
                    </div>
                }

            </div>

        </div>
    );
}

export default Header;