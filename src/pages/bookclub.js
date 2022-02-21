import Head from 'next/head'
import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { categories, getAllBookReviews } from '../services/books'


import searchIcon from '../assets/icons/bx-search.svg'
import cover from '../assets/images/cover.jpg'

export default function BookClub() {

  const [term, setTerm] = useState('')
  const [response, setResponse] = useState()
  const [timeoutId, setTimeoutId] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [booksFeed, setBooksFeed] = useState()


  useEffect(() => {
    let res = getAllBookReviews()
    res.then(data => {
      setBooksFeed(data)
    })
  }, [])

  const getBooks = async (term) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}`
    );
    const data = await response.json();
    console.log(data)
    setResponse(data.items)
  };



  const handleInputChange = (query) => {
    clearTimeout(timeoutId)
    setTerm(query);
    const timeout = setTimeout(() => getBooks(term), 500)
    setTimeoutId(timeout)
  }




  return (
    <div className="bg-gray-50 w-full ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <Transition appear show={isOpen}>

          <Dialog
            as="div"
            onClose={setIsOpen}
            className="fixed inset-0 z-10 "
          >
            <div className=" px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              <span
                className=" align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>


              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <div className=" inline-block w-full max-w-5xl  p-10 my-8  text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                  <div className="flex p-4 items-center w-10/12  m-2 mx-auto border bg-gray-50 shadow-gray-50 shadow-xl rounded-xl">
                    <Image className="opacity-50" src={searchIcon} />
                    <input
                      placeholder="Search book by name or author"
                      className=" w-full ml-2 bg-gray-50 flex text-xl text-gray-600  outline-none"
                      onChange={(e) => handleInputChange(e.target.value)}
                    />
                  </div>


                  <div className=" overflow-y-scroll h-96 ">
                    <div className="flex flex-row flex-wrap justify-center ">
                      {response && response.map(book => {
                        return (
                          <Link href={`/books/${book.id}`} >
                            <div key={book.accessInfo.id}
                              className="cursor-pointer hover:bg-gray-50 flex flex-col border cursor m-2 p-4 w-1/4 items-center h-auto shadow-sm rounded-xl ">

                              {book.volumeInfo.imageLinks ?
                                <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                                :
                                <Image src={cover} />

                              }
                              <h1 className="text-xl text-center text-gray-700 font-semibold mt-4">{book.volumeInfo.title}</h1>
                            </div>
                          </Link>
                        )
                      })}

                      {
                        categories.slice(0, 8).map(category => {
                          return (
                            <Link href={`/books/category/${category.name}`} >


                              <div className="flex flex-col items-center px-10 py-6 shadow-sm hover:bg-gray-50 cursor-pointer border m-4 rounded-xl">
                                <span className="text-5xl m-2">
                                  {category.emoji}
                                </span>
                                <h2 className="text-xl font-semibold capitalize">{category.name}</h2>
                              </div>
                            </Link>

                          )
                        })
                      }

                    </div>

                    <div className=" flex  mx-auto text-center">
                      <Link href="/books/allcategories" >
                        <a className="px-6 text-center mx-auto hover:bg-gray-100 p-2 rounded-lg text-sm">
                          All Categories &rarr;
                        </a></Link>
                    </div>


                  </div>

                </div>
              </Transition.Child>


              {/* <button className="border rounded-full p-2 text-2xl h-10 w-10" onClick={() => setIsOpen(false)}>X</button> */}

            </div>

          </Dialog>

        </Transition>




        <div className="flex">

          <div
            onClick={() => setIsOpen(true)}

            className="flex bg-white h-12  text-lg my-4 text-gray-400  outline-none cursor-pointer p-2 items-center w-1/4 m-2 ml-auto mr-10 border  shadow-gray-50 shadow-xl rounded-xl">
            <Image className="opacity-50" src={searchIcon} />
            <span className="ml-2">Search book by name or author</span>
          </div>



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
