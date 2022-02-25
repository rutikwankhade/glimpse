import Head from 'next/head'
import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {  getAllBookReviews } from '../services/books'



export default function BookClub() {

  const [booksFeed, setBooksFeed] = useState()


  useEffect(() => {
    let res = getAllBookReviews()
    res.then(data => {
      setBooksFeed(data)
    })
  }, [])


  return (
    <div className="bg-gray-50 w-full ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">


        <div className="flex">


          <div className="w-8/12 mx-auto">

            {booksFeed && booksFeed.map(post => {
              return (
                <div className=" w-2/3  m-4  border rounded">
                  <div className="flex p-2 items-center">
                    <img src={post.avatar} className="rounded-full h-8 w-8" />
                    <span className="text-md font-medium text-gray-600 mx-2">{post.username}</span>
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
                      <img
                        src={post.cover}
                        className="w-max h-max border m-4 shadow-xl"
                      />
                    </div>

                    <div className="flex items-center mx-8">
                      <h1 className="text-2xl text-gray-700 w-1/2 font-bold">{post.title}&rarr;</h1>
                      <span className="ml-auto"><span className="font-semibold text-sm text-gray-500 rounded-full px-4 p-1 border border-white bg-white ml-6">{post.category}</span>)</span>
                    </div>
                  </div>
                </div>

              )

            })
            }
          </div>

        </div>



      </main>


    </div>
  )
}
