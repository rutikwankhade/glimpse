import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSelector } from "react-redux";

import hero1 from '../assets/images/doodle-2.png'
import hero2 from '../assets/images/library.png'

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

      <div className="m-10 flex flex-row px-20 py-12  mx-auto rounded-xl">

        <div className="w-6/12">
          <h1 className="  text-5xl text-gray-800 m-10 font-semibold leading-1">Discover, track and talk about the <span className="italic">books</span> you are reading</h1>

          <Link href="/signup">
            <button className="bg-gray-800 hover:bg-gray-900 transform  hover:translate-x-2 duration-300  text-white text-2xl f p-2 rounded-full px-8 mx-8">Get started free &rarr;</button>
          </Link>
        </div>


        <div className="w-5/12">
          <Image src={hero1} />
        </div>


      </div>

      {/* <div className="w-8/12 mx-auto">
                        <Image src={hero2}  className=" rounded-xl shadow-2xl mx-auto"/>

        
</div> */}


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