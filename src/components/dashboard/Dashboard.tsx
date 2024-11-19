"use client"

import Image from "next/image"
import png from "/public/pdf.png"
import { Download, Frown } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const Dashboard = () => {
  const [composeEntries, setComposeEntries]:any = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComposeEntries = async () => {
      try {
        const res = await fetch("/api/getcompose");
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "An error occurred while fetching data");
        }

        const data = await res.json();
        setComposeEntries(data[0].mail);
        console.log(data[0].mail);
        
        setError(null);
      } catch (err:any) {
        setError(err.message);
      }
    };

    fetchComposeEntries();
  }, []);

  return (
    <section className='p-5'>
      <h2 className='mb-2 p-2 py-2 text-2xl font-semibold text-gray-700'>Report and Notifications</h2>
    
    {composeEntries.length === 0 ? 
  (
    <div className="w-[75vw] h-[75vh] flex justify-center items-center flex-col gap-2">
      <h1 className="flex gap-2 text-4xl text-gray-400 justify-center items-center font-bold">No Reports found <Frown size={30} /></h1>
      <p className="text-xl text-gray-400">All pentest report can be found here sumbitted by admins.</p>
    </div>

  ) : (
      <div className=' grid w-full grid-cols-1 gap-4 xl:grid-cols-3'>
      {
        composeEntries.map((items: any, index:number) => (
      <div key={index} className='w-96 relative hover:scale-105 transition-all cursor-pointer overflow-hidden items-center justify-between rounded-3xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:flex sm:p-6'>
      <Link href={`/api/download?url=${encodeURIComponent(`${items.file}`)}`}>
        <div className="absolute w-12 h-12 bg-green-500 text-white hover:scale-90 transition-transform bottom-2 right-2 rounded-full flex justify-center items-center">
        <Download />
        </div>
      </Link>
      <div className="absolute right-5 top-2 text-gray-400">{items.createdAt.split("T")[0]}</div>
        <div className='w-full'>
          <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-400'>{items.subject}</h3>
          <p className="text-xs text-gray-600 py-1">{items.message}</p>
        <div className='w-5/6 h-4/5 py-4'>
            <Image 
            src={png.src}
            alt="pdf png"
            width={50}
            height={50}
            />
          </div>
        </div>
      </div>
    ))
  }
    </div>
  )  
  }

    
    </section>
  )
}

export default Dashboard
