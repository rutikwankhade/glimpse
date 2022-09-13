import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SearchBar from './Searchbar'
import { Popover } from '@headlessui/react'
import settingsIcon from '../assets/icons/settings.svg'
import userIcon from '../assets/icons/user.svg'
import logoutIcon from '../assets/icons/logout.svg'
import feedIcon from '../assets/icons/feed.svg'
import tagIcon from '../assets/icons/tag.svg'
import bookIcon from '../assets/icons/book.svg'
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
        <div className="sticky z-20 top-0 border-b bg-white flex items-center p-4 h-max md:px-20">

            <Link href="/">
                <a className="text-xl ml-2 font-semibold cursor-pointer flex text-gray-800 w-40">📕 Glimpse</a>
            </Link>



            <div className="w-full">

                {isAuthenticated
                    ?
                    <div className="flex flex-row items-center w-full">
                        <Link href="/bookclub">
                            <a className="flex rounded flex-row mx-2 hover:bg-gray-50 items-center p-2 rounded">
                                <span className="py-2 w-10 h-10 " >
                                    <Image src={feedIcon} />
                                </span>
                                <span className="md:text-lg md:flex hidden">Explore</span>
                            </a>
                        </Link>

                        <Link href="/books/allcategories">
                            <a className="flex rounded flex-row mx-2 hover:bg-gray-50 items-center p-2 ">
                                <div className="py-2 w-10 h-10 ">
                                    <Image src={tagIcon} />
                                </div>
                                <span className=" md:text-lg text-sm md:flex hidden">Categories</span>
                            </a>
                        </Link>




                        <SearchBar />

                        <span className="text-md w-max md:flex hidden mx-2 mb-2 font-semibold">{user.username}</span>


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
                                            <Image src={bookIcon} />
                                            <span className="mx-2">My Library</span>
                                        </a>
                                    </Link>


                                    <Link href="/settings">
                                        <a className="flex hover:bg-gray-50 items-center p-2 ">
                                            <Image src={settingsIcon} />
                                            <span className="mx-2">Edit Profile</span>
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
                    <div className="flex  ml-auto mr-4 ">

                        <Link href="/signup" >
                            <a className=" ml-auto mr-2 bg-white p-2 hover:text-violet-500 px-6 md:text-lg text-md font-semibold ">Sign up</a>
                        </Link>
                        {/* <Link href="/login" >
                            <a className=" bg-white hover:text-violet-500 border rounded p-2 px-6 md:text-lg text-md font-semibold ">Log In</a>
                        </Link> */}
                    </div>
                }

            </div>

        </div>
    );
}

export default Header;