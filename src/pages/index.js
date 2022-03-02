import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSelector } from "react-redux";

import hero1 from '../assets/images/doodle-2.png'
import scribble1 from '../assets/images/scribble1.png'
import libraryImg from '../assets/images/library.png'
import glimpseShotImg from '../assets/images/glimpse-shot.png'
import tagsImg from '../assets/images/tags.png'


const Home = () => {
  const router = useRouter()
  const { isAuthenticated } = useSelector((state) => state.auth);


  useEffect(() => {

    if (isAuthenticated) {
      router.push('/bookclub')
    }

  }, [isAuthenticated])

  return (
    <div className="w-full  py-4 bg-fuchsia-100">

      <div className="m-10 md:w-10/12 flex md:flex-row flex-col  md:py-12  mx-auto rounded-xl">

        <div className="md:w-6/12 ">
          <h1 className="  text-5xl text-gray-800 m-10 font-semibold leading-1">Discover, track and talk about the <span className="italic">books</span> you are reading</h1>
          <Link href="/signup">
            <button className="bg-gray-800 hover:bg-gray-900 transform  hover:translate-x-2 duration-300  text-white text-2xl f p-2 rounded-full px-8 mx-8">Get started free &rarr;</button>
          </Link>
        </div>


        <div className="md:w-5/12 md:m-0 p-8">
          <Image src={hero1} />
          <div className="flex">
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Community</span>
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Books</span>
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Collection</span>
          </div>
        </div>

      </div>


      <div className="my-10 flex md:flex-row flex-col items-center p-2 md:w-10/12  mx-auto">
        <div className="md:w-1/2 shadow-xl rounded-xl bg-white">
          <Image src={glimpseShotImg} className="rounded-xl" />
        </div>

        <div className="md:w-1/2 ">
          <h1 className=" text-3xl text-gray-800 m-10 font-semibold leading-1">
            Share glimpse of the books you read. <span className="italic">Share your thoughts</span> and favorite quotes with glimpse.
          </h1>
        </div>
      </div>



      <div className="my-10 flex md:flex-row flex-col-reverse  items-center p-2 md:w-10/12  mx-auto">
        <div className="md:w-1/2">
          <h1 className=" text-3xl text-gray-800 m-10 font-semibold leading-1">
            Find books from <span className="italic">different genres</span> like fiction, nonfiction, business, technology, and more.
          </h1>
        </div>

        <div className="md:w-1/2 rounded-xl bg-white shadow-xl">
          <Image src={tagsImg} className="rounded-xl" />
        </div>
      </div>



      <div className="my-24 flex  flex-col  items-center md:w-10/12 p-2 mx-auto">
        <div className="md:w-10/12 py-4 text-center">
          <h1 className=" text-5xl text-gray-800 m-10 font-semibold leading-1">
            Create your own online library and manage your books with ease.
          </h1>
          <h3 className="text-2xl px-6">Add books to your collection as currently reading, want to read, and read.</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Image src={libraryImg} className="rounded-xl" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="rounded-xl w-20" >
          <Image src={scribble1} />
        </div>

        <h1 className="italic text-xl text-gray-800 m-10 font-semibold leading-1">
          made with 💖 by <a href="https://rutikwankhade.dev" target="_blank" className="hover:text-fuchsia-500">Rutik Wankhade</a>
        </h1>

      </div>




    </div>
  );
}

Home.getLayout = page => (
  <div>
    <Header />

    {page}
  </div>

)

export default Home;