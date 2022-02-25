import Link from "next/link";

const Sidebar = () => {
    return ( 
        <div className=" w-1/5 flex flex-col  p-4 border">
            <Link href="/bookclub" >
                <a className="text-xl my-2 rounded-xl border font-semibold p-4 bg-white">
                Books feed

                </a>
            </Link> 
            <Link href="/explore" >
                
                <a className="text-xl rounded-xl my-2 border font-semibold p-4 bg-white">
                explore

                </a>
            </Link> 

             <Link href="/books/allcategories" >
                
                <a className="text-xl rounded-xl my-2 border font-semibold p-4 bg-white">
               categories

                </a>
            </Link> 

        </div>
     );
}
 
export default Sidebar;