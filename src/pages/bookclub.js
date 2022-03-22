import Head from 'next/head'
import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeLayout from '../components/HomeLayout'
import { useSelector, useDispatch } from "react-redux";
import { getExploreFeed, getLatestUsers, getUserFeed } from '../app/features/feedSlice'
import GlimpsePost from '../components/GlimpsePost'

function BookClub() {
  const dispatch = useDispatch()

  const { isFetching, exploreFeed, latestUsers, userFeed } = useSelector((state) => state.feed);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.following?.length > 0) {
      dispatch(getUserFeed())

    } else {
      dispatch(getExploreFeed())


    }

    dispatch(getLatestUsers())


  }, [user.following])





  return (
    <div className="bg-gray-50 w-full pb-10">
      <Head>
        <title>bookclub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex md:flex-row flex-col">


        <div className="flex flex-col md:w-7/12">
          {
            (user.following?.length > 0 ?userFeed:exploreFeed).map(post => {
              return <GlimpsePost post={post} />
            })
          }
        </div>

        <div className="bg-white p-10 rounded-xl shadow-sm top-24 md:w-4/12 mx-10 my-4 sticky h-max">

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 pb-4">Discover new readers from the community</h2>
          </div>
          {latestUsers && latestUsers.map(user => {
            return (
              <Link href={`/profile/${user._id}`} key={user._id}>
                <div className="hover:bg-gray-50 cursor-pointer p-2 flex items-center border-b ">
                  <Image src={user.avatar} width="40" height="40" className="rounded-full" />
                  <span className="text-md mx-4 font-medium text-gray-500">{user.username}</span>
                </div>
              </Link>
            )
          })}
        </div>



      </main>


    </div>
  )
}
BookClub.getLayout = page => (

  <HomeLayout>{page}</HomeLayout>
)
export default BookClub;
