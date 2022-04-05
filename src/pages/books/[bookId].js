import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { getRandomColor } from '../../utils/utils'
import { addBookToLibrary } from '../../app/features/userProfileSlice';
import HomeLayout from "../../components/HomeLayout";
import { postBookReview, getReviewsByBookId } from '../../app/features/feedSlice';
import cover from '../../assets/images/cover.jpg'
import cheveronDownIcon from '../../assets/icons/cheveron-down.svg'
import Image from 'next/image';
import GlimpsePost from '../../components/GlimpsePost';
import toast, { Toaster } from 'react-hot-toast';


const options = [
    { id: 1, emoji: '🔖', type: 'Want to read' },
    { id: 2, emoji: '📖', type: 'Currently reading' },
    { id: 3, emoji: '✅', type: 'Read' }
]


const BookInfo = (params) => {


    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { isFetching, bookReviews } = useSelector((state) => state.feed);

    const [info, setInfo] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [postText, setPostText] = useState('')
    const [bgColor, setBgColor] = useState({ primaryColor: '#f2f2f2', secondaryColor: "#f2f2f2" })

    const [bookStatus, setBooksStatus] = useState(options[0])


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
    }, [params.params.bookId])

    useEffect(() => {
        dispatch(getReviewsByBookId(params.params.bookId))
    }, [])



    useEffect(() => {

        if (!isAuthenticated) {
            router.push('/')
        }

    }, [isAuthenticated])


    const handlePostSubmit = () => {

        const review = {
            primaryColor: bgColor.primaryColor,
            secondaryColor: bgColor.secondaryColor,
            theme: bgColor,
            review: postText,
            bookId: info.id,
            category: info.volumeInfo.categories[0],
            cover: info.volumeInfo.imageLinks.thumbnail,
            title: info.volumeInfo.title
        }



        dispatch(postBookReview(review))


        setIsOpen(false)
    }



    const handleBookStatus = (option) => {
        setBooksStatus(option);

        const book = {
            bookId: info.id,
            cover: info.volumeInfo.imageLinks.thumbnail,
            title: info.volumeInfo.title,
            status: option.type
        }
        // console.log(book)
        //add book to collection
        dispatch(addBookToLibrary(book))

    }


    return (
        <div className="bg-gray-50 p-2 w-full items-center justify-center">
            <Transition appear show={isOpen}>

                <Dialog
                    as="div"
                    onClose={setIsOpen}
                    // className={isOpen ? ' fixed inset-0 z-10 overflow-y-auto' : ''}
                    className="fixed inset-0 z-20 overflow-y-auto"
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

                                            {info && info.volumeInfo.imageLinks ?
                                                <img src={info.volumeInfo.imageLinks.thumbnail} className="  shadow-xl  border" />
                                                :
                                                <img src={cover} />

                                            }
                                        </div>


                                        <div className="flex items-center mx-8">
                                            <h1 className="text-2xl text-gray-700 font-bold">{info && info.volumeInfo.title}&rarr;</h1>
                                            <span className="ml-auto">{info && info.volumeInfo.categories?.map(category => <span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6" key={category}>{category}</span>)}</span>

                                        </div>

                                    </div>

                                    <div className="flex items-center ">
                                        <button
                                            onClick={() => {
                                                const color = getRandomColor()
                                                setBgColor(color);
                                            }}
                                            className="flex items-center hover:shadow bg-gray-50 h-max p-2 border rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
                                            <span className="mx-2 text-xl">Change theme</span>
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




            <div className="flex  md:flex-row flex-col justify-center">



                <div className="w-1/2">


                    {info ?
                        <div className="sticky justify-center top-20 p-10  mx-auto  ">

                            <div className="flex flex-row items-center  justify-center">

                                <div className=" h-max  shadow-xl border  ">

                                    {info.volumeInfo.imageLinks ?
                                        <img src={info.volumeInfo.imageLinks.thumbnail} className=" w-max" />
                                        :
                                        <Image src={cover} />

                                    }

                                </div>

                                <div className="  m-6">
                                    <h1 className="md:text-4xl text-2xl text-gray-700 font-bold">{info && info.volumeInfo.title}</h1>
                                    <p className="text-md text-gray-600 my-2">{info && info.volumeInfo.subtitle}</p>

                                    <div className="flex ">
                                        <span>by{info && info.volumeInfo.authors.map(author => <span className="font-semibold mx-2" key={author}>{author}</span>)}</span>
                                        <span className="mx-4"><span className="font-semibold" >{info && info.volumeInfo.pageCount}</span> pages</span>




                                    </div>

                                    <div className="mt-4">
                                        {
                                            info && info.volumeInfo.categories?.map(category => <span className="font-semibold bg-yellow-100 hover:bg-yellow-200 rounded-full py-1 px-4  mt-4" key={category}>
                                                <Link href={`/books/category/${category}`} key={category}>

                                                    {category}
                                                </Link>
                                            </span>)}
                                    </div>

                                </div>

                            </div>




                            <div className="mt-10 flex md:flex-row justify-center">



                                <Listbox
                                    value={bookStatus}
                                    onChange={(option) => handleBookStatus(option)}
                                    className="flex flex-col bg-white text-left"
                                    as="div"
                                >
                                    <Listbox.Button className="border font-semibold hover:shadow-sm px-4 p-2 text-sm md:text-lg rounded-xl flex items-center">
                                        <span className="">{bookStatus.emoji}</span>
                                        <span className="">{bookStatus.type}</span>
                                        <span className="ml-auto mr-2 mt-2"><Image src={cheveronDownIcon} /></span>
                                    </Listbox.Button>

                                    <Listbox.Options className="border bg-white rounded shadow-lg ">
                                        {options.map((option) => (
                                            <Listbox.Option
                                                key={option.id}
                                                value={option}
                                                className="p-2 hover:bg-purple-100 cursor-pointer"
                                            >
                                                <span className="">{option.emoji}</span> {option.type}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>

                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="mx-4 h-14  bg-white border  px-4  text-sm md:text-lg font-semibold  hover:shadow-sm rounded-xl p-2">
                                    ✨ Share a glimpse
                                </button>

                            </div>
                        </div> :
                        <div></div>

                    }

                </div>

                <div className="md:w-1/2 md:px-4 ">
                    {
                        bookReviews.length ?

                            <div className=" flex flex-col items-center justify-center">
                                {
                                    bookReviews && bookReviews.map(post => {
                                        return (
                                            <div className="">
                                                <GlimpsePost post={post} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div >
                                <h2 className="text-2xl text-center py-20 text-gray-500 m-10">No glimpse of this book has been shared by anyone yet.</h2>
                            </div>
                    }
                </div>
            </div>

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

BookInfo.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)

export default BookInfo;