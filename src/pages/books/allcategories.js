import { categories } from '../../services/books'
import Link from 'next/link';
import HomeLayout from "../../components/HomeLayout";


const AllCategories = () => {
    return (
        <div className="w-full">

            <div className="bg-gray-50 p-4">
                <h1 className=" text-3xl font-bold ml-4 capitalize text-gray-800">Find books by category</h1>
            </div>
            <div className="flex flex-row w-10/12 py-2 flex-wrap mx-10">

                {
                    categories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
                        return (
                            <Link href={`/books/category/${category.name}`} >
                                <div className="flex items-center justify-start px-6 p-2 hover:bg-gray-50 cursor-pointer border m-2 rounded-xl">
                                    <span className="text-4xl m-2">
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

AllCategories.getLayout = page => (

    <HomeLayout>{page}</HomeLayout>
)

export default AllCategories;