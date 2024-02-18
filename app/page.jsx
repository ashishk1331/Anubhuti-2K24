import { Toaster } from "react-hot-toast";
import {HeroSection} from "@/components/landing/HeroSection.jsx";
import Events from "@/components/landing/Events.jsx";
import { EventsData } from '@/components/landing/EventsData.jsx';
import { Gallery } from '@/components/landing/Gallery.jsx';
import { CoreTeam } from '@/components/landing/CoreTeam.jsx';
import LandingFooter from "@/components/landing/landing-footer";
// Components

export default function Home() {
  return (
    <>
        <Toaster position="top-left" />
        <div className='w-[100vw]'>
          <HeroSection></HeroSection>
          <Events EventsData={EventsData}></Events>
          <Gallery></Gallery>
          <CoreTeam></CoreTeam>
          <LandingFooter></LandingFooter>
      </div>
    </>
  );
}
