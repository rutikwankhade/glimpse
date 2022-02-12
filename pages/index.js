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

     


      </main>


    </div>
  )
}
