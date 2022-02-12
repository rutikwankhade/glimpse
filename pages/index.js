import Head from 'next/head'
import { useState } from 'react'

export default function Home() {


  const [term, setTerm] = useState('')
  const [response, setResponse] = useState([])
  const [timeoutId, setTimeoutId] = useState()

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


        <div className="flex items-center m-20 justify-center">
          <input
            placeholder="Search"
            className="p-6 bg-slate-50 shadow-slate-200 shadow-xl  text-2xl rounded-xl w-8/12 outline-none"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="flex  items-center justify-center ">
          <div className="flex flex-row flex-wrap justify-center">
            {response.map(book => {
              return (
                <div key={book.accessInfo.id}
                  className="flex border m-2 p-4 w-1/4 shadow-sm rounded-xl "
                >
                  <img src={book.volumeInfo.imageLinks.thumbnail} className="rounded-xl w-1/3  shadow-xl" />
                  <h1 className="text-xl font-semibold ml-4">{book.volumeInfo.title}</h1>
                </div>
              )
            })}
          </div>
        </div>


      </main>


    </div>
  )
}
