import Link from "next/link";
import Image from "next/image";

import feedIcon from '../assets/icons/feed.svg'
import tagIcon from '../assets/icons/tag.svg'
import bookIcon from '../assets/icons/book.svg'

import { useSelector } from "react-redux";

const Sidebar = () => {

        const { user, userId, isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div className="h-full sticky md:top-24 bottom-0 md:z-0 z-10 bg-white md:w-80 flex justify-center flex-row md:flex-col md:text-xl text-md font-semibold p-4  rounded-xl mx-4">


            <Link href="/bookclub">
                <a className="flex hover:bg-gray-50 items-center p-2 rounded">
                    <div className="p-2 border w-10 h-10 rounded">

                        <Image src={feedIcon} />
                    </div>
                    <span className="mx-2">Feed</span>
                </a>
            </Link>

            <Link href="/books/allcategories">
                <a className="flex hover:bg-gray-50 items-center p-2 ">
                    <div className="p-2 border w-10 h-10 rounded">

                        <Image src={tagIcon} />
                    </div>
                    <span className="mx-2">Categories</span>
                </a>
            </Link>

            <Link href={`/profile/${userId}`}>
                <a className="flex hover:bg-gray-50 items-center p-2 rounded">
                    <div className="p-2 border w-10 h-10 rounded">
                        <Image src={bookIcon} />

                    </div>
                    <span className="mx-2">My Library</span>
                </a>
            </Link>



        </div>
    );
}

export default Sidebar;