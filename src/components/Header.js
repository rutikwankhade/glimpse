import Link from "next/link";
import avatarIcon from '../assets/images/avatar.png'
import Image from "next/image";
import {  useSelector } from "react-redux";

const Header = () => {
        const { user} = useSelector((state) => state.auth);


    return (
        <div className="border flex items-center w-full p-4 px-20">
            <Link href="/">
                <h1 className="text-xl font-semibold italic">Glimpse</h1>


            </Link>

            <div className="mx-auto">
                <Link href="/bookclub" >
                    <a className="text-xl flex rounded align-baseline font-semibold font-sans">
                        <span>📖</span><span >Books</span>
                    </a>
                </Link>

            </div>

            <div className="flex items-center mr-10">
                <span className="text-xl px-8 mr-4 font-semibold">{user?.username} </span> 
                <Image src={avatarIcon} className=" px-4 rounded-full"
                    height="40"
                    width="40"
                />

            </div>
           

        </div>
    );
}

export default Header;