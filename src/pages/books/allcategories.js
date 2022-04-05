import { categories } from '../../services/books'
import Link from 'next/link';
import HomeLayout from "../../components/HomeLayout";


const AllCategories = () => {
    return (
        <div className=" bg-gray-50  p-2">

            <div className="md:w-10/12 pb-10 mx-auto">
                <div className="p-4  ">
                    <h1 className=" text-3xl font-bold md:px-20 capitalize text-gray-800">Find books by category</h1>
                </div>
                <div className="flex  flex-row  py-2 flex-wrap md:px-20">

                    {
                        categories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
                            return (
                                <Link href={`/books/category/${category.name}`} key={category.name}>
                                    <div className="flex bg-white transform hover:scale-105 duration-300 items-center justify-start px-6 p-2 hover:bg-gray-50 cursor-pointer border m-2 rounded-xl">
                                        <span className="md:text-4xl text-xl m-2">
                                            {category.emoji}
                                        </span>
                                        <h2 className="md:text-xl text-lg font-semibold capitalize">{category.name}</h2>
                                    </div>
                                </Link>

                            )
                        })
                    }

                </div>

            </div>


        </div>);
}

AllCategories.getLayout = page => (

    <HomeLayout>{page}</HomeLayout>
)

export default AllCategories;