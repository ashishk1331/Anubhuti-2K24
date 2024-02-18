import React from 'react'
import {EventCard} from './EventCard';
export default function Events(props) {
    const EventsData=props.EventsData;

  return (
    <div className='flex flex-col gap-10 items-center justify-center bg-[#000f1e] h-[200vh] transition-all duration-400 ease-in-out' id='Events' >
        <h2 className='text-[#efc36a] font-bold text-6xl -mt-[10px] mb-10'>
            All Events
        </h2>
        <div className='grid grid-cols-3 items-center justify-between place-content-stretch gap-10 flex-wrap'>
            {EventsData.map((EventsData) => (
            <EventCard key={EventsData.id}
            EventsData={EventsData}
            {...EventsData} />
            ))}

        </div>
        
    </div>
  )
}
