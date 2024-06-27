import React from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import Skills from "./components/Skills";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden ">
      {/* this is the bg grid box line  */}
      <div className="dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative ">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <LandingSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 ">
        <Skills />
      </div>
    </div>
  );
}
