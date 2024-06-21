import Link from "next/link";
import React from "react";

export default function LandingSection() {
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:Text-7xl font-bold">
          Helloing there <br />
          <span className="underline underline-offset-8 decoration-purple-500">
            {"I am Dillon."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Hi 👋, I'm Dillon Steve Juriansz I am passionate and self- motivated developer from Sri Lanka I am currently learning JS and frame works like ReactJS and React Native You can ask me about JAVA, Python"
          }
        </p>

        <Link
          href={"mailto:ds.juriansz@gmail.com"}
          className="inline-block group"
        >
          <div>
            <h1 className="text-3xl font-bold group-hover:text-purple-500 transition-all ">
              Contact Me 📮
            </h1>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-blue-500 rounded-full translate-x-2 "></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] ">
          <div className="flex gap-3 translate-x-8 ">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8 ">
            <div className="w-32 h-32 rounded-2xl bg-purple-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
