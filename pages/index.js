import Head from 'next/head'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

import searchIcon from '../assets/icons/bx-search.svg'


export default function Home() {

  const [term, setTerm] = useState('')
  const [response, setResponse] = useState()
  const [timeoutId, setTimeoutId] = useState()
  const [isOpen, setIsOpen] = useState(false)



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
                              <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded-xl w-24  shadow-xl shadow-slate-200 border" />
                              <h1 className="text-xl text-center text-gray-700 font-semibold mt-4">{book.volumeInfo.title}</h1>
                            </div>
                          </Link>
                        )
                      })}

                    </div>
                  </div>

                </div>
              </Transition.Child>


              {/* <button className="border rounded-full p-2 text-2xl h-10 w-10" onClick={() => setIsOpen(false)}>X</button> */}

            </div>

          </Dialog>

        </Transition>

        <div className="">

          <div
            onClick={() => setIsOpen(true)}

            className="flex bg-white  bg-gray-50  text-lg my-4 text-gray-400  outline-none cursor-pointer p-2 items-center w-1/3 m-2 ml-auto mr-10 border bg-gray-50 shadow-gray-50 shadow-xl rounded-xl">
            <Image className="opacity-50" src={searchIcon} />
            <span className="ml-2">Search book by name or author</span>


          </div>

        </div>



      </main>


    </div>
  )
}
