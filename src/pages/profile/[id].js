import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserProfile, followReader, unfollowReader, getPostsByUserId } from "../../app/features/userProfileSlice";
import HomeLayout from "../../components/HomeLayout";
import BooksCollection from "../../components/BooksCollection";

const Profile = ({ params }) => {
    const dispatch = useDispatch()
    const { profile, userFollowStatus, userPosts } = useSelector((state) => state.profile);
    const { userId, isAuthenticated } = useSelector((state) => state.auth);

    const [isUserFollowed, setIsUserFollowed] = useState(false)

    useEffect(() => {
        dispatch(getUserProfile(params))
        dispatch(getPostsByUserId(params.id))

    }, [])


    useEffect(() => {
        if (profile && profile.followers?.length > 0) {

            profile.followers.forEach((user) => {
                if (user._id === userId) {
                    setIsUserFollowed(true);
                }
            });
        }

        else {
            setIsUserFollowed(false);
        }

    }, [profile, userId, profile.followers])



    const handleFollowUser = () => {
        dispatch(followReader(profile._id))
        setIsUserFollowed(true);

    }

    const handleUnfollowUser = () => {
        dispatch(unfollowReader(profile._id))
        setIsUserFollowed(false);

    }



    return (
        <div className="w-full flex flex-row ">

            <div className="md:w-1/4 border top-0 sticky h-84 m-2 rounded-xl bg-white p-6">

                <div className="flex flex-col justify-center text-center items-center mx-auto md:px-20">
                    <div className="flex flex-col justify-center">
                        <img src={profile.avatar} className="mx-2 rounded-full  h-24 w-24" />

                    </div>

                    <div className="mx-2">
                        <span className="rounded-full mx-2 text-2xl font-semibold">{profile.username}</span>

                        <div className="flex text-md font-medium my-4">
                            <span className="mx-2 flex"><span className="mr-2">{profile && profile.following?.length}</span> following</span>
                            <span className="mx-2 flex"><span className="mr-2">{profile && profile.followers?.length}</span> followers</span>
                        </div>

                    </div>


                    <div className="ml-auto mr-10">

                            {(userId !== params.id && isAuthenticated) ?
                                <div>
                                    {
                                        isUserFollowed ?
                                            <button
                                                onClick={() => handleUnfollowUser()}
                                                className="bg-gray-700 text-white rounded-full px-10 text-xl p-2">
                                                {userFollowStatus === 'loading' ? <span>...</span> : <span>Unfollow</span>}
                                            </button>
                                            :
                                            <button
                                                onClick={() => handleFollowUser()}
                                                className="bg-gray-700 text-white rounded-full px-10 text-xl p-2">
                                                {userFollowStatus === 'loading' ? <span>...</span> : <span>Follow</span>}
                                            </button>

                                    }
                                </div>
                                :
                                <div></div>

                            }
                    </div>

                </div>
            </div>

            <BooksCollection
                collection={profile && profile.booksCollection}
                posts={userPosts}
            />

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

Profile.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)

export default Profile;