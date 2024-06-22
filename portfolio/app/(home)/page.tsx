import React from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden ">
      <div className="max-w-7xl mx-auto p-5  ">
        <Navbar />
        <LandingSection />
      </div>
    </div>
  );
}
