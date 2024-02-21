import { Toaster } from "react-hot-toast";
import { HeroSection } from "@/components/landing/HeroSection.jsx";
import Events from "@/components/landing/Events.jsx";
import { eventsData } from "@/components/landing/EventsData.jsx";
import { Gallery } from "@/components/landing/Gallery.jsx";
import { CoreTeam } from "@/components/landing/CoreTeam.jsx";
import LandingFooter from "@/components/landing/Landing-footer";
// Components

import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Toaster position="top-left" />
      <div className="w-full">
        <HeroSection />
        {/* <Events eventsData={eventsData} /> */}
        <Gallery />
        <CoreTeam />
        <LandingFooter />
      </div>
    </>
  );
}
