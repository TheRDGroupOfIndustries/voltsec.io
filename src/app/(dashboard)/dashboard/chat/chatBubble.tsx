import React from 'react'

function ChatBubble({varient, message}: {
  varient?: any;
  message: any;
}) {

  return (
<div className={`w-auto h-auto overflow-hidden ${varient==="gray" ? "bg-gray-200 dark:bg-blue-950 dark:text-white text-black" : "bg-blue-600 text-white"} rounded-lg mb-2 flex flex-col justify-start items-start px-3 pb-4`}>
    <h1 className={`font-semibold text-base w-auto mb-2 tracking-wide border-b ${varient==="gray" ? "border-gray-400 dark:border-gray-800" : "border-white"}`}>{message.sender[0]} • {message.sender[1]}</h1>
    <p className="leading-tight text-sm">{message.message}</p>
</div>
  )
}

export default ChatBubble