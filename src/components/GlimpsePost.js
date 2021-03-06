import Link from "next/link";

const GlimpsePost = ({ post }) => {
    return (
        <div className=" w-full m-4 bg-white p-4 shadow-sm rounded " key={post._id}>
            <Link href={`/profile/${post.postedBy._id}`}>
                <div className="cursor-pointer flex p-2 items-center bg-white">
                    <img src={post.postedBy.avatar} className="rounded-full h-8 w-8 " />
                    <span className="text-md font-medium text-gray-600 mx-2">{post.postedBy.username}</span>
                </div>
            </Link>


            <div className=" rounded md:h-96 h-max flex flex-col justify-center"
                style={{ backgroundColor: post.primaryColor }}
            >
                <div className="flex items-center justify-center ">

                    <div className="w-2/3  m-4">
                        <p className="w-full  rounded-xl outline-none font-sans  p-6  z-40 text-sm md:text-xl font-semibold text-gray-600"
                            style={{ backgroundColor: post.secondaryColor }}
                        >
                            {post.review}
                        </p>
                    </div>
                    <Link href={`/books/${post.bookId}`}>
                        <img
                            src={post.cover}
                            className="md:w-max w-20 h-max border m-4 shadow-xl hover:scale-105 duration-300 hover:shadow-2xl cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="flex items-center mx-8">
                    <h1 className="text-xl text-gray-700 md:w-1/2 font-bold pb-4">{post.title}&rarr;</h1>

                    <Link href={`/books/category/${post.category}`} >
                        <span className="ml-auto"><span className=" cursor-pointer font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white md:flex hidden ml-6">{post.category}</span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GlimpsePost;