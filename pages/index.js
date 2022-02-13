import Head from 'next/head'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'

export default function Home() {


  const [term, setTerm] = useState('')
  const [response, setResponse] = useState([])
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
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          className={isOpen ? ' h-screen p-10 tansform -translate-y-20 flex  justify-center' : ''}
        >

          <Dialog.Overlay className="fixed backdrop-blur-lg bg-gray-50 inset-0 -z-10 opacity-30" />

          <div className="flex flex-col w-10/12 z-10 opacity-100 border p-10  rounded-xl  bg-white">



            <input
              placeholder="Search book by name or author"
              className="p-4 w-10/12 mx-auto flex m-2  text-xl text-gray-600 shadow-gray-50 shadow-xl rounded-xl border outline-none"
              onChange={(e) => handleInputChange(e.target.value)}
            />


            {/* <button className="border rounded-full p-2 text-2xl h-10 w-10" onClick={() => setIsOpen(false)}>X</button> */}


            <div className=" overflow-y-scroll h-84 ">
              <div className="flex flex-row flex-wrap justify-center ">
                {response.map(book => {
                  return (
                    <Link href={`/books/${book.id}`}>
                    <div key={book.accessInfo.id}
                      className="flex border m-2 p-4 w-4/12 h-auto shadow-sm rounded-xl "
                    >
                      <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded-xl w-1/3   shadow-xl shadow-slate-200 border" />
                      <h1 className="text-xl font-semibold ml-4">{book.volumeInfo.title}</h1>
                      </div>
                      </Link>
                  )
                })}
              </div>
            </div>

          </div>


        </Dialog>

        <div className="">
          <button
            onClick={() => setIsOpen(true)}
            className="text-3xl bg-yellow-200 p-2 m-2 rounded-full"
          >🔍</button>




        </div>



      </main>


    </div>
  )
}
