import Image from 'next/image';
import hero1 from '../assets/images/hero-1.png'
import Link from 'next/link';
import Header from '../components/Header';
const Home = () => {

  return (
    <div className="w-full">

      <div className="m-10 flex flex-row w-10/12 mx-auto">

        <div className=" w-1/2">
          <h1 className="  text-6xl font-serif m-10 font-bold leading-2">Discover good books from the readers just like you</h1>

          <Link href="/signup">
            <button className="bg-white text-2xl font-bold p-2 rounded-full px-6 mx-8">Let's get started</button>
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
<Header/>

    {page}
  </div>
  
)

export default Home;