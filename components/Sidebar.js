import Link from "next/link";

const Sidebar = () => {
    return ( 
        <div className=" bg-gray-50 flex flex-col  rounded-lg m-10">
            <Link href="/" >
                <a className="text-2xl border font-semibold p-4 bg-white">
                Books Feed

                </a>
            </Link> 
            <Link href="/explore" >
                
                <a className="text-2xl border font-semibold p-4 bg-white">
                home

                </a>
            </Link> 

        </div>
     );
}
 
export default Sidebar;