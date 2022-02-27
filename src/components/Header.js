import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import SearchBar from './Searchbar'

import { Menu, Popover } from '@headlessui/react'

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

                        <Popover.Panel className="absolute z-10 text-lg font-semibold text-gray-600 right-0 bg-white p-4 border w-40 shadow-lg rounded-xl">
                            <div className="flex flex-col">

                                <Link href="/analytics">
                                    <div>
                                     <Image src={user.avatar}
                                className="rounded-full"
                                height="20" width="20" />
                                    <span >My Profile</span>

                                    </div> 
                                   

                                </Link>
                                <a href="/engagement">Settings</a>
                                <a href="/security">Logout</a>
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