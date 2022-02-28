import BooksCollection from "../components/BooksCollection";
import { useSelector, useDispatch } from "react-redux";
import HomeLayout from "../components/HomeLayout";
import { useEffect } from "react";
import { getPostsByUserId } from "../app/features/userProfileSlice";
import { useRouter } from "next/router";

const library = () => {
    const { user, userId, isAuthenticated } = useSelector((state) => state.auth);
    const { userPosts } = useSelector((state) => state.profile);
    const router = useRouter()

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPostsByUserId(userId))

    }, [])


    useEffect(() => {

        if (!isAuthenticated) {
            router.push('/')
        }

    }, [isAuthenticated])



    return (
        <div className="w-full">
            <div>
                <BooksCollection
                    collection={user && user.booksCollection}
                    posts={userPosts}
                />

            </div>
        </div>
    );
}

library.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)

export default library;