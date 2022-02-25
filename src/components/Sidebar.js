import Link from "next/link";

const Sidebar = () => {
    return ( 
        <div className=" w-1/5 flex flex-col p-4 border rounded-xl mx-4">
            <Link href="/bookclub" >
                <a className="  text-xl my-2 rounded-xl font-semibold bg-white">
                Feed

                </a>
            </Link> 
        

             <Link href="/books/allcategories" >
                
                <a className="text-xl rounded-xl my-2 font-semibold  bg-white">
               categories

                </a>
            </Link> 

                <Link href="/explore" >
                
                <a className="text-xl rounded-xl my-2 font-semibold  bg-white">
                My Library

                </a>
            </Link> 

        </div>
     );
}
 
export default Sidebar;