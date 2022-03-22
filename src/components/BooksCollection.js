import { Tab } from '@headlessui/react'
import Link from 'next/link';
import BookCard from './BookCard';
import GlimpsePost from './GlimpsePost';

const BooksCollection = ({ collection, posts }) => {
    return (
        <div className="w-full ">
            <Tab.Group>

                <Tab.List className="w-full justify-center bg-gray-50 p-2 border  flex flex-row flex-wrap items-center ">
                    <Tab className="rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">🚀 Stats</Tab>
                    <Tab className="rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">📖 Currently Reading</Tab>
                    <Tab className=" rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">🔖 Want to Read</Tab>
                    <Tab className="rounded-xl  shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">✅ Read</Tab>
                    <Tab className="rounded-xl  shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">✨ Glimpse</Tab>

                </Tab.List>

                <Tab.Panels className="mt-4">

                    <Tab.Panel >
                        <div className="flex flex-wrap items-center mx-auto justify-center w-10/12 p-4">
                            <div className=" bg-purple-100 rounded-xl shadow w-full md:w-1/4 p-4 m-4 flex flex-col text-center">
                                <span className="text-5xl font-semibold m-2"> {collection?.filter(book => book.status === "Want to read").length}</span>
                                <span className="text-xl text-gray-600">Want to Read</span>
                            </div>

                            <div className=" bg-green-100 rounded-xl shadow w-full md:w-1/4 p-4 m-4 flex flex-col text-center">
                                <span className="text-5xl font-semibold m-2"> {collection?.filter(book => book.status === "Read").length}</span>
                                <span className="text-xl text-gray-600">Completed</span>
                            </div>

                            <div className=" bg-yellow-100 rounded-xl shadow w-full md:w-1/4 p-4 m-4 flex flex-col text-center">
                                <span className="text-5xl font-semibold m-2"> {posts && posts.length}</span>
                                <span className="text-xl text-gray-600">Glimpse shared</span>
                            </div>
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Currently reading").length) ?
                                    <div className="flex flex-wrap">
                                        {
                                            collection?.filter(book => book.status === "Currently reading").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :

                                    <div className="flex flex-col mx-auto text-center my-10 w-max p-8 rounded-xl bg-yellow-50">
                                        <h1 className="text-2xl font-semibold">Nothing on your shelf right now.</h1>
                                        <h2 className="text-xl">This could be the right time to pick a new book.</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Want to read").length) ?
                                    <div className="flex flex-wrap">
                                        {
                                            collection?.filter(book => book.status === "Want to read").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :
                                    <div className="flex flex-col mx-auto text-center my-10 w-max p-8 rounded-xl bg-yellow-50">
                                        <h1 className="text-2xl font-semibold">No books on your list yet.</h1>
                                        <h2 className="text-xl">Follow other readers and discover new books from your feed.</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Read").length) ?
                                    <div className="flex flex-wrap">
                                        {
                                            collection?.filter(book => book.status === "Read").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :

                                    <div className="flex flex-col mx-auto text-center my-10 w-max p-8 rounded-xl bg-yellow-50">
                                        <h1 className="text-2xl font-semibold">You haven't marked any book as read yet.</h1>
                                        <h2 className="text-xl">This is your sign to stat reading!</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="w-full p-4 flex md:flex-row flex-col justify-center flex-wrap py-10">

                            {
                                posts && posts.map(post => {
                                    return (
                                        <div className="md:w-1/2">
                                            <GlimpsePost post={post} />
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