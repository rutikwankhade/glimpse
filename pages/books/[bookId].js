import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { getRandomColor } from '../../utils/utils'
import { handleReviewSubmit } from '../../services/books'
const BookInfo = (params) => {
    const [info, setInfo] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [postText, setPostText] = useState('')
    const [bgColor, setBgColor] = useState({ primaryColor: '#f2f2f2', secondaryColor: "#f2f2f2" })




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


    const handlePostSubmit = () => {

        const bookInfo = {
            theme: bgColor,
            review: postText,
            bookId: info.id,
            category: info.volumeInfo.categories[0],
            cover: info.volumeInfo.imageLinks.thumbnail,
            title:info.volumeInfo.title
        }

handleReviewSubmit(bookInfo)
        // console.log(data)
        setIsOpen(false)
    }


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

                            <div className=" inline-block w-full max-w-5xl max-h-screen h-full p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex flex-col items-center">



                                    <div className=" rounded h-96 w-2/3 flex flex-col"
                                        style={{ backgroundColor: bgColor.primaryColor }}
                                    >
                                        <div className="flex items-center justify-center ">

                                            <div className="w-2/3  m-4">
                                                <textarea
                                                    placeholder="What did you loved most about this book? share your thoughts."
                                                    className="w-full bg-green-100  h-64 rounded-xl outline-none font-sans  p-6  z-40 text-xl font-semibold text-gray-600"
                                                    onChange={(e) => setPostText(e.target.value)}
                                                    value={postText}
                                                    style={{ backgroundColor: bgColor.secondaryColor }}
                                                />

                                            </div>
                                            <img
                                                src={info && info.volumeInfo.imageLinks.thumbnail}
                                                className="w-max h-max border m-4  shadow-xl "
                                            />
                                        </div>


                                        <div className="flex items-center mx-8">
                                            <h1 className="text-2xl text-gray-700 font-bold">{info && info.volumeInfo.title}&rarr;</h1>
                                            <span className="ml-auto">{info && info.volumeInfo.categories.map(category => <span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6">{category}</span>)}</span>

                                        </div>

                                    </div>

                                    <div className="flex items-center ">
                                        <button
                                            onClick={() => {
                                                const color = getRandomColor()
                                                setBgColor(color);
                                            }}
                                            className="bg-gray-50 h-max p-2 border rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
                                        </button>


                                        <button
                                            onClick={() => handlePostSubmit()}
                                            className="text-white bg-gray-700 px-6 p-2 rounded-lg text-xl h-max m-10"
                                        >Submit</button>

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

                    <div className="w-max  m-6">
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
                                className="mr-4 text-white bg-gray-700 px-6 text-xl  font-semibold rounded-lg p-2">✨ Share a glimpse</button>

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