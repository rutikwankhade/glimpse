import BooksCollection from "../components/BooksCollection";
import { useSelector, useDispatch } from "react-redux";
import HomeLayout from "../components/HomeLayout";
import { useEffect } from "react";
import { getPostsByUserId } from "../app/features/userProfileSlice";
const library = () => {
    const { user, userId } = useSelector((state) => state.auth);
    const { userPosts } = useSelector((state) => state.profile);


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPostsByUserId(userId))

    }, [])



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