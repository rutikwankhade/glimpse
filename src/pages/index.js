import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSelector } from "react-redux";

import hero1 from '../assets/images/doodle-2.png'
import scribble1 from '../assets/images/scribble1.png'
import scribble3 from '../assets/images/scribble3.png'
import scribble5 from '../assets/images/scribble-5.png'


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
          <div>

          </div>


        </div>


        <div className="md:w-5/12 md:m-0 p-8">
          <Image src={hero1}  />

          <div className="flex">
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Community</span>
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Books</span>
            <span className="bg-white px-4 p-1 font-semibold text-sm rounded-full m-2">Collection</span>


          </div>


        </div>


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