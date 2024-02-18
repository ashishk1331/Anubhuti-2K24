import React from 'react'

export const EventCard = (props) => {
    const title=props.title;
    const description=props.description;
    const imageSrc=props.image;

  return (
    <div className='h-[550px] min-h-[550px] w-[350px] cursor-pointer 
    transition-all duration-300 ease-in-out hover:scale-105 rounded-[15px] overflow-hidden'>
        
        <div className='relative'>
            <img src={imageSrc}
            className='w-[350px] h-[350px] cursor-pointer tracking-[1px] '>
            </img>

            <p className='absolute top-[300px] rounded-t-md left-[15px] text-white uppercase text-xl'>{title}</p>
        </div>

        <div className='bg-white relative h-[200px]'>
            <p className='p-4 text-2xl'>
            {
                description.length >100 ? 
                (description.substr(0,100)+".....") : (description+".....")
            }
            </p>

            <div>
            <button className='absolute bottom-0 right-0 p-4 text-red-800 font-bold text-2xl'>Read More</button>
            </div>
        </div>

        

    </div>
  )
}
