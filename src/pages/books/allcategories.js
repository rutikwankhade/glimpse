import { categories } from '../../services/books'
import Link from 'next/link';


const AllCategories = () => {
    return (
        <div>

            <div className="bg-gray-50 p-4">
                <h1 className=" text-3xl font-bold ml-4 capitalize text-gray-800">Find books by category</h1>
            </div>
            <div className="flex flex-row w-10/12 py-2 flex-wrap justify-center ">

                {
                    categories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
                        return (
                            <Link href={`/books/category/${category.name}`} >
                                <div className="flex flex-col items-center px-10 py-6 shadow-sm hover:bg-gray-50 cursor-pointer border m-2 rounded-xl">
                                    <span className="text-5xl m-2">
                                        {category.emoji}
                                    </span>
                                    <h2 className="text-xl font-semibold capitalize">{category.name}</h2>
                                </div>
                            </Link>

                        )
                    })
                }

            </div>


        </div>);
}

export default AllCategories;