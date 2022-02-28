import { Tab } from '@headlessui/react'
import Link from 'next/link';
import BookCard from './BookCard';

const BooksCollection = ({ collection, posts }) => {
    return (
        <div className="w-full">
            <Tab.Group>

                <Tab.List className="w-full justify-center  bg-gray-50 p-2 border rounded-b-xl flex flex-row items-center ">
                                        <Tab className="rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">Stats</Tab>

                    <Tab className="rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">📖 Currently Reading</Tab>
                    <Tab className=" rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">🔖 Want to Read</Tab>
                    <Tab className="rounded-xl  shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">✅ Read</Tab>
                    <Tab className="rounded-xl  shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">✨ Glimpse</Tab>

                </Tab.List>

                <Tab.Panels>

                  <Tab.Panel>
                        <div className="flex flex-wrap">
                            <div>
                               <span> {collection.filter(book => book.status === "Want to Read").length}</span>
                            </div>
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="flex flex-wrap">
                            {
                                collection?.filter(book => book.status === "Currently reading").map(book => {
                                    return <BookCard book={book} />  
                                })
                            }
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="flex flex-wrap">
                            {
                                collection?.filter(book => book.status === "Want to Read").map(book => {
                                    return <BookCard book={book} />  
                                })
                            }
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="flex flex-wrap">
                            {
                                collection?.filter(book => book.status === "Read").map(book => {
                                    return <BookCard book={book} />   
                                })
                            }
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="w-full flex flex-row justify-center flex-wrap py-10">

                            {
                                posts && posts.map(post => {
                                    return (
                                        <div className="w-5/12  m-2  border rounded " key={post._id}>
                                            <div className="flex p-2 items-center bg-white">
                                                <Link href={`/profile/${post.postedBy._id}`}>

                                                    <img src={post.postedBy.avatar} className="rounded-full h-8 w-8 cursor-pointer" />
                                                </Link>
                                                <span className="text-md font-medium text-gray-600 mx-2">{post.postedBy.username}</span>
                                            </div>

                                            <div className=" rounded h-96 flex flex-col"
                                                style={{ backgroundColor: post.primaryColor }}
                                            >
                                                <div className="flex items-center justify-center ">

                                                    <div className="w-2/3  m-4">
                                                        <p className="w-full bg-green-100  h-64 rounded-xl outline-none font-sans  p-6  z-40 text-xl font-semibold text-gray-600"
                                                            style={{ backgroundColor: post.secondaryColor }}>
                                                            {post.review}
                                                        </p>
                                                    </div>
                                                    <Link href={`/books/${post.bookId}`}>
                                                        <img
                                                            src={post.cover}
                                                            className="w-max h-max border m-4 shadow-xl hover:shadow-2xl cursor-pointer"
                                                        />
                                                    </Link>
                                                </div>

                                                <div className="flex items-center mx-8">
                                                    <h1 className="text-2xl text-gray-700 w-1/2 font-bold">{post.title}&rarr;</h1>
                                                    <span className="ml-auto"><span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6">{post.category}</span></span>
                                                </div>
                                            </div>
                                        </div>

                                    )

                                })
                            }
                        </div>
                    </Tab.Panel>


                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default BooksCollection;