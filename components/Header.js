import Link from "next/link";

const Header = () => {
    return (
        <div className="border flex items-center w-full p-4 px-20">
            <Link href="/">
                <h1 className="text-xl font-semibold italic">Glimpse</h1>


            </Link>

            <div className="mx-auto">
                <Link href="/bookclub" >
                    <a className="text-xl border flex p-2 rounded align-baseline font-semibold font-sans">
                        <span>📖</span><span >Books</span>
                    </a>
                </Link>

            </div>


        </div>
    );
}

export default Header;