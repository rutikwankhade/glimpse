import {signInWithGoogle} from '../services/auth'

const Home = () => {

 

  return (
    <div className="w-full">

      <div className="m-10 flex flex-col items-center">
        <h1 className=" text-center text-6xl font-bold">Discover books and movies</h1>
        <button
          onClick={() => signInWithGoogle()}
          className="m-10 border rounded-full font-semibold shadow-sm text-xl p-2 px-6">sign in with google</button>
      </div>

    </div>
  );
}

export default Home;