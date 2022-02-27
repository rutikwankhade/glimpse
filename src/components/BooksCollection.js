import { Tab } from '@headlessui/react'
import Link from 'next/link';

const BooksCollection = ({ collection }) => {
    return (
        <div className="w-full ">
            <Tab.Group>

                <Tab.List className=" justify-center  bg-gray-50 p-2 border rounded flex flex-row items-center ">
                    <Tab className="rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">📖 Currently Reading</Tab>
                    <Tab className=" rounded-xl shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">🔖 Want to Read</Tab>
                    <Tab className="rounded-xl  shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">✅ Read</Tab>
                </Tab.List>

                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex flex-wrap">

                            {
                                collection?.filter(book => book.status === "Currently reading").map(book => {
                                    return (
                                        <div key={book.bookId} className="w-1/4 ">
                                            <Link href={`/books/${book.bookId}`} >
                                                <div
                                                    className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 px-6 items-center h-auto shadow-sm rounded-xl ">
                                                    <img src={book.cover} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                                                    <h1 className="text-xl text-center text-gray-700 font-semibold mt-4  h-auto overflow-hidden">{book.title}</h1>
                                                </div>
                                            </Link>
                                        </div>)
                                })
                            }
                        </div>
                    </Tab.Panel>


                    <Tab.Panel>
                        <div className="flex flex-wrap">

                            {
                                collection?.filter(book => book.status === "Want to read").map(book => {
                                    return (
                                        <div key={book.bookId} className="w-1/4">
                                            <Link href={`/books/${book.bookId}`} >
                                                <div
                                                    className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 px-6 items-center h-auto shadow-sm rounded-xl ">
                                                    <img src={book.cover} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                                                    <h1 className="text-xl text-center text-gray-700 font-semibold mt-4 overflow-hidden">{book.title}</h1>
                                                </div>
                                            </Link>
                                        </div>)
                                })
                            }
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-wrap">

                            {
                                collection?.filter(book => book.status === "Read").map(book => {
                                    return (
                                        <div key={book.bookId} className="w-1/4">
                                            <Link href={`/books/${book.bookId}`} >
                                                <div
                                                    className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 px-6 items-center h-auto shadow-sm rounded-xl ">
                                                    <img src={book.cover} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                                                    <h1 className="text-xl text-center text-gray-700 font-semibold mt-4 overflow-hidden">{book.title}</h1>
                                                </div>
                                            </Link>
                                        </div>)
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