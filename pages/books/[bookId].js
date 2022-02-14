import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const BookInfo = (params) => {
    const [info, setInfo] = useState()
    const [isOpen, setIsOpen] = useState(false)


    const getBookInfo = async (term) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${term}`
        );
        const data = await response.json();
        console.log(data.items[0])
        setInfo(data.items[0])

    };

    useEffect(() => {
        getBookInfo(params.params.bookId);

    }, [])



    return (
        <div className="bg-gray-50 w-full items-center justify-center">
            <Transition appear show={isOpen}>

                <Dialog
                    as="div"
                    onClose={setIsOpen}
                    // className={isOpen ? ' fixed inset-0 z-10 overflow-y-auto' : ''}
                    className="fixed inset-0 z-10 overflow-y-auto"
                >
                    <div className="min-h-screen px-4 text-center">

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >

                            <div className=" inline-block w-full max-w-4xl max-h-screen h-full p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex">

                                    <textarea
                                        placeholder="Search book by name or author"
                                        className="p-4 w-1/3 h-96 mx-auto flex   text-xl text-gray-600 shadow-gray-50 shadow-xl rounded-xl border outline-none"
                                        onChange={(e) => handleInputChange(e.target.value)}
                                    />

                                    <div className="bg-purple-200 rounded h-96 w-2/3 flex itens-center justify-center ">


                                        <div className="w-2/3">

                                            <p className="font-sans  p-4 z-40 text-xl font-semibold text-gray-600">Deep Work was a solid self-help/productivity book. Being a podcast junkie, I had heard the majority of things that Newport preaches in his book. However, I really appreciated his practical applications of how to enter into Deep Work, or 'the zone' as I call it.</p>

                                        </div>
                                        <img
                                            src={info && info.volumeInfo.imageLinks.thumbnail}
                                            className="w-max h-max border m-4 mt-auto mb-4 "

                                        />

                                    </div>

                                </div>
                           </div>
                        </Transition.Child>

                    </div>

                </Dialog>
            </Transition>



            {info ?
                <div className="border m-4 p-10 w-8/12 bg-white rounded-xl mx-auto flex flex-row items-center">
                    <div className="-skew-y-6 border w-max h-max p-2 rounded-md  shadow-xl  border-l-8   ">
                        <img src={info && info.volumeInfo.imageLinks.thumbnail} />
                    </div>

                    <div className="w-2/3 m-6">
                        <h1 className="text-4xl text-gray-700 font-bold">{info && info.volumeInfo.title}</h1>
                        <p className="text-xl text-gray-600 my-2">{info && info.volumeInfo.subtitle}</p>

                        <div className="flex ">
                            <span>by{info && info.volumeInfo.authors.map(author => <span className="font-semibold mx-2">{author}</span>)}</span>
                            <span className="mx-4"><span className="font-semibold" >{info && info.volumeInfo.pageCount}</span> pages</span>
                            <span>{info && info.volumeInfo.categories.map(category => <span className="font-semibold bg-yellow-100 rounded px-4 mx-2">{category}</span>)}</span>

                        </div>


                        <div className="mt-6 flex">
                            <button
                                onClick={() => setIsOpen(true)}
                                className=" text-white bg-gray-700 px-6 text-xl  font-semibold rounded-lg p-2">✨ Share a glimpse</button>

                            <button className="text-3xl p-1  border border-gray-300 mx-2 shadow-sm rounded justify-center items-center"><span>🔖</span></button>
                            <button className="p-1 text-3xl border border-gray-300 mx-2 shadow-sm rounded justify-center items-center"><span >📖</span></button>
                            <button className="text-3xl p-1 border border-gray-300 mx-2 shadow-sm rounded justify-center items-center"><span>✅</span></button>


                        </div>
                    </div>
                </div> :
                <div></div>

            }



        </div>
    );
}



export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export async function getStaticProps({ params }) {

    return {
        props: { params }// will be passed to the page component as props
    }
}

export default BookInfo;