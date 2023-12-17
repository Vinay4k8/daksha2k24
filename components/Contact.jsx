import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='p-3 min-h-screen bg-[#02020b]/90 text-white ' id='contact'>
     <div className=' rounded-md  flex flex-col justify-center items-center w-full h-full mt-32'>

      <h1 className='mt-9 text-center text-3xl uppercase tracking-[10px]'>Contact US</h1>
      <div className='flex flex-col  gap-y-6 p-4 w-[650px]'>
      <div className='my-3 flex  items-center gap-4 justify-center'>
      <input type='text' className='focus:border-white bg-transparent  hover:border-white rounded-lg hover:duration-500 transition-all outline-none border-[2px] border-gray-400/40 text-xl py-2 shadow-md  px-4' placeholder='Enter your First name' />
      <input type='text' className='focus:border-white bg-transparent hover:border-white rounded-lg hover:duration-500 transition-all outline-none border-[2px] border-gray-400/40 text-xl py-2 shadow-md  px-4 mx-1' placeholder='Enter your Last name' />
      </div>
      <input type='text' className='focus:border-white bg-transparent hover:border-white rounded-lg hover:duration-500 transition-all outline-none border-[2px] border-gray-400/40 text-xl py-2 shadow-md mx-1  px-4' placeholder='Enter your Emai ' />
      <textarea type='text' className='focus:border-white bg-transparent  hover:border-white rounded-lg hover:duration-500 transition-all outline-none border-[2px] border-gray-400/40 text-xl py-2 shadow-md  px-4 w-[600px] mx-auto' placeholder='Enter your name' rows={4} />
      <button className='px-4 py-2 uppercase tracking-widest rounded-full border-2 border-gray-400/40 w-max hover:border-white hover:scale-105 transition-all duration-500'>
        submit
      </button>
     </div>
      </div>
      <div>
      </div>
      <div className='text-center p-4 mt-10'>
      <div className="flex gap-4 w-5 h-5 md:w-full md:h-full justify-center">
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
  )
}

export default Contact