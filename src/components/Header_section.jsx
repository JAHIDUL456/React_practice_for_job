import React from 'react'
import hero from '/hero.png'
import { useState, useEffect } from 'react'

const Header_section = () => {
    // eikhane ami search niye kichu code korbo
    const[search,setSearch] = React.useState("");
    const [handle,sethandle] = React.useState("");

    const handleSearch=()=>{
        sethandle(search);
    }

    // this section is for the api data fetching
    





  return (
    <div className="h-[500px] lg:h-[900px]  bg-cover bg-center bg-no-repeat relative bg-[url('/hero-bg.png')] ">
        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-center justify-center gap-4 '>
            <div>
                {/* this section is for the image */}
                <img src={hero} className='w-[300px] lg:w-[600px] mt-[-2rem] lg:mt-[-10rem]' alt="" />

            </div>
            <div className='text-center pt-3'>
                {/* this section is for the text  */}
                <h1 className='text-3xl  lg:text-6xl font-bold text-white'>Find <span className='bg-gradient-to-r from-cyan-400 via-green-300 to-blue-400 text-transparent bg-clip-text'>Movies</span>  You'll Love Without the Hassel</h1>
            </div>
             <div   className='flex items-center justify-center mt-4'>
                {/* this section is for the search bar  */}
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Movie' className="w-[300px] lg:w-[600px] h-10 rounded-md px-2 text-white border-2 border-cyan-400" />
                <button onClick={handleSearch} type='submit' className='bg-gradient-to-r from-cyan-400 via-green-500 font-bold to-blue-500 text-white px-4 py-2 rounded-md ml-2 cursor-pointer active:scale-95'>Search</button>
                
            </div>
        </div>
    </div>
  )
}

export default Header_section