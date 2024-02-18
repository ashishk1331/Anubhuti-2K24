import React from 'react'

export const Navbar = () => {
  return (
    <div >
        <ul className='flex flex-row justify-center items-center text-white gap-8 text-2xl w-full mt-[20px]'>
            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition duration-200 ease-in-out hover:translate-y-3 cursor-pointer uppercase'>
            <a href="#Events">Events</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>Schedule</li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>
            <a href="#Gallery">Gallery</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>
            <a href="/login">Registrations</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>
            <a href="/donate">Donations</a>
            </li>

            <li className='border-y-2 p-2 hover:text-[#efc36a]
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>Core Team</li>

            <li className='border-y-2 p-2 hover:text-[#efc36a] 
            transition ease-in-out hover:translate-y-3 cursor-pointer uppercase'>Queries</li>
        </ul>
    </div>
  )
}
