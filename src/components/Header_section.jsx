import React from 'react';
import hero from '/hero.png';

const Header_section = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="h-[500px] lg:h-[900px] bg-cover bg-center bg-no-repeat relative bg-[url('/hero-bg.png')]">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-center justify-center gap-4'>
                <img
                    src={hero}
                    className='w-[300px] lg:w-[600px] mt-[-2rem] lg:mt-[-10rem]'
                    alt="Hero"
                />
                <h1 className='text-3xl lg:text-6xl font-bold text-white text-center pt-3'>
                    Find <span className='bg-gradient-to-r from-cyan-400 via-green-300 to-blue-400 text-transparent bg-clip-text'>Movies</span> You'll Love Without the Hassle
                </h1>
                <div className='flex items-center justify-center mt-4'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder='Search Movie'
                        className="w-[300px] lg:w-[600px] h-10 rounded-md px-2 text-white border-2 border-cyan-400 bg-transparent"
                    />
                    <button
                        onClick={handleSearch}
                        className='bg-gradient-to-r from-cyan-400 via-green-500 to-blue-500 text-white font-bold px-4 py-2 rounded-md ml-2 cursor-pointer active:scale-95'
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header_section;
