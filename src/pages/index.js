import { signIn ,signOut,useSession } from "next-auth/react";
const Home = () => {

  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="w-full">

      <div className="m-10 flex flex-col items-center">
        <h1 className=" text-center text-6xl font-bold">Discover books and movies</h1>
        <button
          onClick={() => signIn('google')}
          className="m-10 border rounded-full font-semibold shadow-sm text-xl p-2 px-6">sign in with google</button>
      
      
       <button
          onClick={() => signOut('google')}
          className="m-10 border rounded-full font-semibold shadow-sm text-xl p-2 px-6">sign out</button>
      
      </div>

      {session && session.user.name}

    </div>
  );
}

export default Home;