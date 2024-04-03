import { Toaster } from "react-hot-toast";
import { HeroSection } from "@/components/landing/HeroSection.jsx";

// Components
import { eventsData } from "@/components/landing/EventsData.jsx";
import { CoreTeam } from "@/components/landing/CoreTeam.jsx";
import LandingFooter from "@/components/landing/Footer";
import Events from "@/components/landing/Events.jsx";
import Gallery from "@/components/landing/Gallery.jsx";
import Register from "@/components/landing/Register";
import Header from "@/components/landing/Header.jsx";
import About from "@/components/landing/About.jsx";
import Logger from "@/components/ui/Logger.jsx";

export default function Home() {
  return (
    <>
      <Toaster position="top-left" />
      <div className="w-full">
        <Header />
        <Events eventsData={eventsData} />
        <Register />
        <Gallery />
        <CoreTeam />
        <LandingFooter />
        <Logger />
      </div>
    </>
  );
}
