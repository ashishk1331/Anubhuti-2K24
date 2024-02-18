import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
        <ul className='w-[90%] grid grid-cols-1 grid-rows-7 md:grid-rows-2 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-7 place-items-center text-white gap-8 text-2xl  mt-[20px]'>
            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition duration-200 ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>
            <a href="#Events">Events</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>Schedule</li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>
            <a href="#Gallery">Gallery</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>
            <a href="/login">Registrations</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>
            <a href="/donate">Donations</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a]
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>
            <a href="#CoreTeam">Core Team</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase font-bold'>Queries</li>
        </ul>
    </div>
  )
}
