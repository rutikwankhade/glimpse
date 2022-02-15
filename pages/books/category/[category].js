import { useState, useEffect } from 'react'
import { categories } from '../../../services/books'

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