import { Menu } from '@headlessui/react'
import avatarIcon from '../assets/images/avatar.png'
import Image from "next/image";
import Link from "next/link";


const UserMenu = () => {
    return (

        <div className="flex justify-end relative">

            <Menu as="div">
                <Menu.Button>
                    <Image src={avatarIcon} className="h-10 w-10 px-4 border-white border-2 rounded-full"

                    />
                </Menu.Button>


                <Menu.Items className="absolute right-0 z-20">



                    <Menu.Item className=" p-2 px-4 text-lg">
                        <a>profile</a>
                    </Menu.Item>
                    <Menu.Item className="  p-2 px-4 text-lg">
                        <a>Settings</a>
                    </Menu.Item>
                    <Menu.Item className="p-2 px-4 text-lg">
                        <a>Sign Out</a>
                    </Menu.Item>

                </Menu.Items>
            </Menu>



        </div>

    );
}

export default UserMenu;