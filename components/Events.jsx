"use client"

import { useState } from "react"



const details=[
  {code:"SOM",title:"School of management"},
  {code:"SOP",title:"School of Pharmacy"},
  {code:"SOE",title:"School of Eng"},
  {code:"SOME",title:"School of Med"},

]

const SchoolOFBranches={
  SOM:["MBA","MAA","M++","MEd--"],
  SOP:["P","P+","P++","po"],
  SOE:["CSE","EEE","ECE","CS","ihw"],
  SOME:["MED","MED+","MED++",],
}


const Events = () => {
  const [branchesCode,setBranchesCode]=useState()
  const [Dbranch,setDBranch]=useState();
  return (
    <div className='bg-white min-h-screen p-2' id="events">
      <h1 className='text-5xl text-transparent 
        font-extrabold uppercase tracking-[10px] text-center my-6 mt-12 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse '>
         Events
      </h1>
      <div className='flex gap-4 flex-wrap items-center justify-center h-full w-full'> 
        {details.map((detail,index)=>{
          return <button key={index} 
          onClick={()=>{setBranchesCode(detail.code);setDBranch(SchoolOFBranches[detail.code][0])}} 
          className='bg-blue-700 transition-all duration-300 hover:scale-105 py-2 px-4 rounded-md text-lg text-white capitalize'>
              {detail.title}
          </button>
        })}
      </div>
      <div className='flex items-center justify-center  w-full h-full'>
     
       {branchesCode && <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 my-3 w-full h-full">
          { SchoolOFBranches[branchesCode].map((branch,index)=>{
            return   <div key={index} className="shadow-lg flex flex-col rounded-md gap-3">
              <div className=" items-center justify-center flex relative h-[300px]">
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"  className="h-[200px]"/>
              <div className="absolute text-white text-3xl">
                {branch}
              </div>
              </div>
              <div className="flex gap-2 w-full items-center justify-center my-2">
              <button className="bg-blue-400 py-2 px-2 rounded-full shadow-md  text-base text-white">Technical Events</button>
              <button className="bg-blue-400 py-2 px-2 rounded-full shadow-md text-base text-white">Non Technical Events</button>
              </div>
              </div>
          })}
        </div>}
        {!branchesCode && <div className="w-full h-[600px] flex items-center text-black justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          select any of above for more
            </div>}
      
      </div>
    </div>
  )
}

export default Events