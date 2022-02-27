import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../../app/features/userProfileSlice";
import HomeLayout from "../../components/HomeLayout";
import BooksCollection from "../../components/BooksCollection";
const Profile = ({ params }) => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state) => state.profile);


    useEffect(() => {
        dispatch(getUserProfile(params))

    }, [])





    return (
        <div className="w-full">

            <div className="w-full border p-6">
                <div className="flex flex-col justify-center">
                    <img src={profile.avatar} className="rounded-full mx-auto h-20 w-20" />
                    <span className="rounded-full mx-auto text-2xl font-semibold">{profile.username}</span>

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