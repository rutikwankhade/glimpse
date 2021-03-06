import { Tab } from '@headlessui/react'
import Link from 'next/link';
import BookCard from './BookCard';
import GlimpsePost from './GlimpsePost';

const BooksCollection = ({ collection, posts }) => {


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="w-full ">
            <Tab.Group as="div" className="">

                <Tab.List className=" m-2 rounded-xl justify-center bg-gray-50 p-2  flex flex-row flex-wrap items-center ">
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2',
                                selected
                                    ? ' border-2 border-gray-600 '
                                    : ''
                            )
                        }
                    >🔖 Want to Read</Tab>

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2',
                                selected
                                    ? ' border-2 border-gray-600 '
                                    : ''
                            )
                        }
                    >📖 Currently Reading</Tab>

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2',
                                selected
                                    ? ' border-2 border-gray-600 '
                                    : ''
                            )
                        }
                    >✅ Read</Tab>

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2',
                                selected
                                    ? ' border-2 border-gray-600 '
                                    : ''
                            )
                        }
                    >✨ Glimpse</Tab>

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2',
                                selected
                                    ? ' border-2 border-gray-600 '
                                    : ''
                            )
                        }
                    >📊 Stats</Tab>

                </Tab.List>

                <Tab.Panels className="mt-4">

                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Want to read").length) ?
                                    <div className="flex flex-wrap justify-center">
                                        {
                                            collection?.filter(book => book.status === "Want to read").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :
                                    <div className="flex flex-col text-center my-20  ">
                                        <h1 className="text-2xl text-gray-400 ">Nothing on the list yet.</h1>
                                        <h2 className="text-gray-400 text-xl py-2">Follow other readers and discover new books from your feed.</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>



                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Currently reading").length) ?
                                    <div className="flex flex-wrap justify-center">
                                        {
                                            collection?.filter(book => book.status === "Currently reading").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :

                                    <div className="flex flex-col text-center my-20  ">
                                        <h1 className="text-2xl text-gray-400 ">Not reading any book currently</h1>
                                        <h2 className="text-xl text-gray-400 py-2">This could be the right time to pick a new book.</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>




                    <Tab.Panel>
                        <div className="">
                            {
                                (collection && collection?.filter(book => book.status === "Read").length) ?
                                    <div className="flex flex-wrap justify-center">
                                        {
                                            collection?.filter(book => book.status === "Read").map(book => {
                                                return <BookCard book={book} />
                                            })
                                        }

                                    </div> :

                                    <div className="flex flex-col  text-center my-20 ">
                                        <h1 className="text-2xl text-gray-400">Shelf is empty</h1>
                                        <h2 className="text-xl text-gray-400 py-2">This is your sign to start reading!</h2>
                                    </div>

                            }

                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="w-full p-4 flex md:flex-row flex-col justify-center flex-wrap ">

                            {
                                posts && posts.map(post => {
                                    return (
                                        <div className="w-10/12">
                                            <GlimpsePost post={post} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </Tab.Panel>

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


                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default BooksCollection;