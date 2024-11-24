import React from 'react'
import sales from '@/assets/sales.webp';
import tester from '@/assets/pentester.png'
import icon from "@/assets/images/logo.jpeg"

function Bubble({title, onclick}: {
  title: string,
  onclick: () => void, // Function to be called when the bubble is clicked
}) {
  return (
    <div onClick={onclick}  className="w-full h-24 bg-blue-100 dark:bg-blue-950 border dark:border-blue-900 dark:text-white border-blue-300 hover:bg-blue-600 text-black hover:cursor-pointer group hover:text-white rounded-lg flex justify-start items-center p-3">
    <div className="w-[4.5rem] rounded-full h-full overflow-hidden bg-white">
      <img
        className="w-full h-full object-cover"
        src={`${title==="Sales" ? tester.src : ""} ${title==="Pentesters" ? sales.src: ""} ${title==="Admins" ? icon.src: ""}`}
        alt="avatar"
      />
    </div>
    <div className="w-[82%] h-full ml-2">
      <h1 className="text-2xl leading-none font-bold">{title}</h1>
      <p className="text-sm text-blue-400 group-hover:text-white">Voltsec.io</p>
    </div>
  </div>
  )
}

export default Bubble