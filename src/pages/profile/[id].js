import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Image from "next/image";
import { getUserProfile } from "../../app/features/profileSlice";
import Link from "next/link";

const Profile = ({ params }) => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state) => state.profile);


    useEffect(() => {
        dispatch(getUserProfile(params))

    }, [])





    return (
        <div>
            {profile && profile.booksCollection?.map(book => {
                return (<div key={book.bookId}>
                    <Link href={`/books/${book.bookId}`} >
                        <div
                            className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 items-center h-auto shadow-sm rounded-xl ">


                            <img src={book.cover} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />

                            <h1 className="text-xl text-center text-gray-700 font-semibold mt-4">{book.title}</h1>
                        </div>
                    </Link>
                </div>)
            })}

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
        props: { params }, // will be passed to the page component as props
    }
}

export default Profile;