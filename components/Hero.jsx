import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return ( 
    <div className="relative" id='hero'>

      <div className="inset-0">
        <video autoPlay muted loop className="object-cover">
          <source src="/Daksha.mp4" />
        </video>
      </div>

      {/* <div className="flex text-white/50 font-extralight italic top-10 md:top-16 relative">
        <h1 className=" text-sm md:text-2xl mx-auto">
          A National Level Techno-Cultural Symposium
        </h1>
      </div> */}

      <div className="flex flex-col space-y-2 md:space-y-5 w-full justify-center items-center absolute  lg:top-[45rem]">
        <h1 className="text-white sm:text-2xl "> March 2024</h1>
       
        <div className="flex gap-4  md:w-full bg-black pb-3 md:h-full justify-center">
          <Image
            className="cursor-pointer "
            src="/youtube.png"
            alt="image"
            width={30}
            height={100}
            
          />
          <Image
            className="cursor-pointer"
            src="/twitter.png"
            alt="image"
            width={30}
            height={100}
          />
          <Image
            className="cursor-pointer"
            src="/insta.png"
            alt="image"
            width={30}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero