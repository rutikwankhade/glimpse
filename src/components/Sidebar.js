import Link from "next/link";
import Image from "next/image";

import feedIcon from '../assets/icons/feed.svg'
import tagIcon from '../assets/icons/tag.svg'
import bookIcon from '../assets/icons/book.svg'


const Sidebar = () => {
    return (
        <div className="h-96 sticky top-20 w-80 flex flex-col text-xl font-semibold p-4 border rounded-xl mx-4">


            <Link href="/bookclub">
                <a className="flex hover:bg-gray-50 items-center p-2 ">
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

            <Link href="/library">
                <a className="flex hover:bg-gray-50 items-center p-2 ">
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