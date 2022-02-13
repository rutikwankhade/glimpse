import { useState, useEffect } from 'react'

const BookInfo = (params) => {
    const [info, setInfo] = useState()

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


                        <div className="mt-6">
                            <button className=" text-white bg-gray-700 px-6 text-xl  font-semibold rounded-lg p-2">✨ Share a glimpse</button>
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