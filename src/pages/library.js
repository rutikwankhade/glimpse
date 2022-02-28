import BooksCollection from "../components/BooksCollection";
import { useSelector } from "react-redux";
import HomeLayout from "../components/HomeLayout";


const library = () => {
    const {user } = useSelector((state) => state.auth);

    return (
        <div className="w-full">
            <div>
            <BooksCollection collection={user && user.booksCollection} />

            </div>
        </div>
    );
}

library.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)

export default library;