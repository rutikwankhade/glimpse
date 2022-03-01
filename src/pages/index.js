import Image from 'next/image';
import hero1 from '../assets/images/hero-1.png'
import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useSelector } from "react-redux";

const Home = () => {
  const router = useRouter()
  const { isAuthenticated } = useSelector((state) => state.auth);


  useEffect(() => {

    if (isAuthenticated) {
      router.push('/bookclub')
    }

  }, [isAuthenticated])

  return (
    <div className="w-full bg-yellow-50 py-4">

      <div className="m-10 flex flex-row w-10/12 mx-auto">

        <div className=" w-1/2">
          <h1 className="  text-6xl text-gray-900 m-10 font-bold leading-2">Discover <span className="underline italic decoration-orange-300">good books</span> from the readers like you</h1>

          <Link href="/signup">
            <button className="bg-gray-800 transform  hover:translate-x-2 duration-300  text-white text-2xl font-bold p-2 rounded-full px-8 mx-8">Let's get started &rarr;</button>
          </Link>
        </div>


        <div className="w-1/2">
          <Image src={hero1} />
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