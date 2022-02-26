import BooksCollection from "../components/BooksCollection";
import { useSelector } from "react-redux";
import HomeLayout from "../components/HomeLayout";


const library = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div>
            <BooksCollection collection={user.booksCollection} />
        </div>
    );
}

library.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)

export default library;