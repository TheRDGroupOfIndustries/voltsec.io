'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IImage } from '@/resource/types/interface';

function Images({ src, classes, TextClasses, text, time ,loading}: IImage) {
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        if(loading){
        const interval = setInterval(() => {
            setIsHovered(true);
            const timeout = setTimeout(() => {
                setIsHovered(false);
            }, 1000)

            return () => clearTimeout(timeout);
        }, time);

        return () => clearInterval(interval);
    }
    }, [time,loading]);
    return (
        <div className=''>
            {isHovered && (
                <div className={` invisible md:visible absolute  bg-white text-black rounded-md flex justify-center items-center p-2 ${TextClasses}`}>
                    <span className="text-center  overflow-hidden text-ellipsis whitespace-nowrap">{text}</span>
                </div>

)}

            <Image

                src={src}
                width={300}
                height={100}
              
                alt="Voltsec WebImages"
                className={` invisible md:visible absolute sm lg:h-65 lg:w-65 shadow-black/40 drop-shadow-2xl md:h-65 md:w-65  md:m-0 m-0 p-0 ${isHovered && loading &&  `animate-bounce`}  ${classes}`}
            />
             <Image

src={src}
width={300}
height={100}

alt="Voltsec WebImages"
className={` md:invisible visible absolute lg:invisiable  shadow-black/40 drop-shadow-2xl h-[23vh] w-[23vh]   md:m-0 m-0 p-0 ${isHovered && loading &&  `animate-bounce`}  ${classes}`}
/>

    
        </div>
    );
};

export default Images;