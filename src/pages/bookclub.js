import Head from 'next/head'
import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeLayout from '../components/HomeLayout'
import { useSelector, useDispatch } from "react-redux";
import { getExploreFeed, getLatestUsers, getUserFeed } from '../app/features/feedSlice'


function BookClub() {
  const dispatch = useDispatch()

  const { isFetching, exploreFeed, latestUsers,userFeed } = useSelector((state) => state.feed);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.following?.length > 0) {
      dispatch(getUserFeed())

    } else {
      dispatch(getExploreFeed())


    }

    dispatch(getLatestUsers())


  }, [user.following])

  // dispatch(getExploreFeed())




  return (
    <div className="bg-gray-50 w-full pb-10">
      <Head>
        <title>bookclub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-row">


        <div className="flex flex-col w-7/12">



          {exploreFeed && exploreFeed.map(post => {
            return (
              <div className="  m-4  border rounded " key={post._id}>
                <div className="flex p-2 items-center bg-white">
                  <Link href={`/profile/${post.postedBy._id}`}>

                    <img src={post.postedBy.avatar} className="rounded-full h-8 w-8 cursor-pointer" />
                  </Link>
                  <span className="text-md font-medium text-gray-600 mx-2">{post.postedBy.username}</span>
                </div>

                <div className=" rounded h-96 flex flex-col"
                  style={{ backgroundColor: post.primaryColor }}
                >
                  <div className="flex items-center justify-center ">

                    <div className="w-2/3  m-4">
                      <p className="w-full bg-green-100  h-64 rounded-xl outline-none font-sans  p-6  z-40 text-xl font-semibold text-gray-600"
                        style={{ backgroundColor: post.secondaryColor }}>
                        {post.review}
                      </p>
                    </div>
                    <Link href={`/books/${post.bookId}`}>
                      <img
                        src={post.cover}
                        className="w-max h-max border m-4 shadow-xl hover:shadow-2xl cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center mx-8">
                    <h1 className="text-2xl text-gray-700 w-1/2 font-bold">{post.title}&rarr;</h1>
                    <span className="ml-auto"><span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6">{post.category}</span></span>
                  </div>
                </div>
              </div>

            )

          })
          }


               {userFeed && userFeed.map(post => {
            return (
              <div className="  m-4  border rounded " key={post._id}>
                <div className="flex p-2 items-center bg-white">
                  <Link href={`/profile/${post.postedBy._id}`}>

                    <img src={post.postedBy.avatar} className="rounded-full h-8 w-8 cursor-pointer" />
                  </Link>
                  <span className="text-md font-medium text-gray-600 mx-2">{post.postedBy.username}</span>
                </div>

                <div className=" rounded h-96 flex flex-col"
                  style={{ backgroundColor: post.primaryColor }}
                >
                  <div className="flex items-center justify-center ">

                    <div className="w-2/3  m-4">
                      <p className="w-full bg-green-100  h-64 rounded-xl outline-none font-sans  p-6  z-40 text-xl font-semibold text-gray-600"
                        style={{ backgroundColor: post.secondaryColor }}>
                        {post.review}
                      </p>
                    </div>
                    <Link href={`/books/${post.bookId}`}>
                      <img
                        src={post.cover}
                        className="w-max h-max border m-4 shadow-xl hover:shadow-2xl cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center mx-8">
                    <h1 className="text-2xl text-gray-700 w-1/2 font-bold">{post.title}&rarr;</h1>
                    <span className="ml-auto"><span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6">{post.category}</span></span>
                  </div>
                </div>
              </div>

            )

          })
          }

        </div>



        <div className="bg-white p-8 border rounded top-24 w-4/12 m-6 sticky h-max">

          <div>
            <h2 className="text-xl font-semibold pb-4">⚡ Discover new readers</h2>
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
