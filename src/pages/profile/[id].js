import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../app/features/userProfileSlice";
import HomeLayout from "../../components/HomeLayout";
import BooksCollection from "../../components/BooksCollection";

const Profile = ({ params }) => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state) => state.profile);
    const { userId } = useSelector((state) => state.auth);

    const [isUserFollowed, setIsUserFollowed] = useState(false)

    useEffect(() => {
        dispatch(getUserProfile(params))

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

    }, [])

    const handleFollowUser = () => {
    
    }
    
    const handleunfollowUser = () => {
        
    }



    return (
        <div className="w-full">

            <div className="w-full border p-6">

                <div className="flex items-center mx-auto px-20">
                    <div className="flex flex-col justify-center">
                        <img src={profile.avatar} className="mx-2 rounded-full  h-20 w-20" />

                    </div>

                    <div className="mx-2">
                        <span className="rounded-full mx-2 text-2xl font-semibold">{profile.username}</span>

                        <div className="flex text-md font-medium">
                            <span className="mx-2">{profile && profile.following?.length} following</span>
                            <span className="mx-2">{profile && profile.followers?.length} followers</span>

                        </div>

                    </div>
                    <div className="ml-auto mr-10">

                        {
                            isUserFollowed ?
                                <button
                                    onClick={()=>handleFollowUser()}
                                    className="bg-gray-700 text-white rounded-full px-10 text-xl p-2">Follow</button>
                                :
                                <button
                                    onClick={()=>handleFollowUser()}
                                    className="bg-gray-700 text-white rounded-full px-10 text-xl p-2">Unfollow</button>


                        }

                    </div>


                </div>







            </div>

            <BooksCollection collection={profile && profile.booksCollection} />


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