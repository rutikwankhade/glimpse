import Link from "next/link";
import { supabase } from "../lib/supabaseClient"


const Header = () => {

     const user = supabase.auth.user();
  const username= user?.user_metadata.name 
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
           <span className="text-xl">{username&&username}
</span> 

        </div>
    );
}

export default Header;