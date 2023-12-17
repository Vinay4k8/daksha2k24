import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const NavLinks=[
    {title:"Home",link:"#hero"},
    {title:"About",link:"#about"},
    {title:"Events",link:"#events"},
    {title:"Sponsors",link:"#sponsors"},
    {title:"Contact",link:"#contact"},
    {title:"Transport",link:"#transport"},

]

const NavBar = () => {
  return (
    <div className='w-full backdrop-blur-sm backdrop-filter sticky bg-black right-0 top-0 left-0 bg-opacity-60 z-50'>
    <div className='max-w-6xl p-3 flex  justify-between items-center mx-auto   w-full'>
        <div >
            <Image src={"/banner.png"} width={100} height={100} className='rounded-full'/>
        </div>
        <div className='flex justify-center items-center gap-3'>
            {NavLinks.map((link,index)=>{
                return(
                    <Link href={link.link} className='capitalize tracking-wider hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 py-2 px-4 rounded-full border-2 border-violet-600 text-white transition-all duration-100 ease-in-out' key={index}>
                        {link.title}
                    </Link>
                );
            })}
        </div>
        <div className=''>
            <Image alt={"image"} width={100} height={100}  src={"/anurag.webp"} />
        </div>
    </div>
    </div>
  )
}

export default NavBar