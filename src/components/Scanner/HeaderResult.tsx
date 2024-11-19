import React, { useState } from 'react';
import { SecurityHR } from '@/resource/types/interface';
import { ChevronDown } from 'lucide-react';

function SecurityHeaderResult({ name, level, desc, recommand }: SecurityHR) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div
    onClick={handleOverlay}
    className={`${showOverlay ? "sm:h-52 h-64" : "h-20"} cursor-pointer relative transition-all bg-white text-black  sm:w-[80vw] w-[92vw] rounded-md flex justify-between sm:px-10 px-6 sm:py-6 py-2 sm:items-start ${showOverlay ? "items-start" : "items-center"}`}
    >
      <h1 className='font-semibold sm:text-xl text-base'>{name}</h1>
      <div className='font-semibold text-xl flex gap-3 justify-center items-end'>
        <h1 className={`${level==="High" && "text-red-500"} ${level==="Medium"  && "text-yellow-500"} ${level==="Low" && "text-green-600"} sm:text-xl text-lg`}>{level}</h1>
        <ChevronDown size={28} className={`cursor-pointer text-gray-400 ${showOverlay ? "rotate-180" : "rotate-0"} transition-transform`} onClick={handleOverlay} />
      </div>
      <div className={`absolute flex flex-col left-3 gap-2 sm:left-12 w-[90%] sm:w-full bottom-4 ${showOverlay ? "opacity-100 z-50" : "opacity-0 -z-50"} transition-all`}>
      <p className='font-normal w-full sm:w-5/6 text-sm sm:text-xl'><span className='text-sm sm:text-xl font-medium text-blue-900'>Description</span>- {desc}</p>
      <p className='font-normal w-full sm:w-5/6 text-sm sm:text-xl'><span className='text-sm sm:text-xl font-medium text-blue-900'>Remediation</span>- {recommand}</p>
      </div>
    </div>
  );
}

export default SecurityHeaderResult;
