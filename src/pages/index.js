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
import Head from 'next/head';

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

      <Head>
        <title>Glimpse</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:url"
          content="https://glimpseapp.netlify.app"
        />
        <meta content="Discover, track and talk about the books you are reading" name="description" />

        <meta property="og:site_name" content="Glimpse" />
        <meta property="og:title" content="Glimpse" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/47467468/156428564-6426ee45-085a-4db6-9d5c-fe7ed2243046.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glimpse" />
        <meta name="twitter:image" content="https://user-images.githubusercontent.com/47467468/156428564-6426ee45-085a-4db6-9d5c-fe7ed2243046.png" />
      </Head>





      <div className="mt-12 mb-20 flex  flex-col  items-center md:w-10/12 p-2 mx-auto">
        <div className="md:w-10/12 py-4 text-center">
          <h1 className=" md:text-5xl text-4xl text-gray-800 m-10 font-semibold leading-1">
            Create your own online library and manage your books with ease.
          </h1>
          <h3 className="text-2xl px-6">Add books to your collection as currently reading, want to read, and read.</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Image src={libraryImg} className="rounded-xl" />
        </div>
      </div>




      <div className="shadow md:m-20 bg-white rounded-xl">



        <div className=" flex md:flex-row flex-col items-center  mx-auto">


          <div className="md:w-1/2 p-14 md:py-40">
            <h1 className=" text-5xl text-gray-800  font-semibold leading-1">
              Share glimpse of the books you read.
            </h1>
            <p className="text-2xl text-gray-700 my-8">Share your thoughts and favorite quotes with glimpse in one click.</p>
          </div>


          <div className="md:w-1/2 p-10 md:py-40 bg-purple-200">
            <div className=" rounded-xl">
              <Image src={glimpseShotImg} className="rounded-xl" />
            </div>

          </div>

        </div>



        <div className=" flex md:flex-row flex-col-reverse  items-center  mx-auto">


          <div className="md:w-1/2 p-10 md:py-40  bg-purple-200">
            <Image src={tagsImg} className="rounded-xl " />
          </div>
          <div className="md:w-1/2 p-14 md:py-40">
            <h1 className=" text-5xl text-gray-800  font-semibold leading-1">
              Find books from different genres
            </h1>
            <p className="text-2xl text-gray-700 my-8">like fiction, nonfiction, business, technology, and more.</p>
          </div>
        </div>

      </div>


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
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Collections</span>
          </div>
        </div>

      </div>


      <div className="flex flex-col items-center justify-center">
        <a href="https://blog.rutikwankhade.dev/introducing-glimpse-a-readers-corner-to-discover-new-books" target="_blank" rel="noreferrer" className="bg-white p-4 m-2 text-center text-xl hover:scale-105 duration-300 hover:text-purple-600 px-10 my-4 rounded-xl border">🔖 Read complete story of why and how I built glimpse</a>

        <div className="rounded-xl w-20" >
          <Image src={scribble1} />
        </div>

        <h1 className="italic  text-md text-gray-800 m-10 font-semibold leading-1">
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