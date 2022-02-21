import { useState, useEffect } from 'react'
import { categories } from '../../../services/books'
import Link from 'next/link'
import Image from 'next/image'

import cover from '../../../assets/images/cover.jpg'

const Category = (params) => {
    const [response, setResponse] = useState()
    const [emoji, setEmoji] = useState()


    const getBooks = async (term) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${term}`
        );
        const data = await response.json();
        console.log(data)
        setResponse(data.items)
    };



    useEffect(() => {
        const res = categories.find(obj => {
            return obj.name === params.params.category
        })

        setEmoji(res.emoji)


        getBooks(`subject:${params.params.category}&startIndex=0&maxResults=20`)

    }, [])


    return (
        <div className="bg-gray-50 w-full">
            <div className="flex items-center text-5xl m-4">
                <span className="border rounded-xl p-4 h-24 w-24 bg-white">{emoji}</span>

                <h1 className=" font-bold ml-4 capitalize text-gray-800">{params.params.category}</h1>
            </div>


            <div className="flex flex-row flex-wrap justify-center bg-white pt-6">
                {response && response.map(book => {
                    return (
                        <Link href={`/books/${book.id}`} >
                            <div key={book.accessInfo.id}
                                className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 w-1/5 items-center h-auto shadow-sm rounded-xl ">

                                {book.volumeInfo.imageLinks ?
                                    <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                                    :
                                    <Image src={cover} />

                                }
                                <h1 className="text-xl text-center text-gray-700 font-semibold py-4 mt-auto  h-20 overflow-hidden">{book.volumeInfo.title}</h1>
                            </div>
                        </Link>
                    )
                })}
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
export default Category;