import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <div key={book.bookId} className="w-1/4 ">
            <Link href={`/books/${book.bookId}`} >
                <div
                    className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 px-6 items-center h-auto shadow-sm rounded-xl ">
                    <img src={book.cover} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                    <h1 className="text-xl text-center text-gray-700 font-semibold mt-4  h-auto overflow-hidden">{book.title}</h1>
                </div>
            </Link>
        </div>
     );
}

export default BookCard;