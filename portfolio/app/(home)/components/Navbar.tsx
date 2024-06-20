import Link from "next/link";
import React from "react";

import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/dillon-sj/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://www.linkedin.com/in/dillon-sj/",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className=" py-10 flex justify-between items-center ">
      <h1 className="text-2xl font-bold underline-offset-8 decoration-green-500 -rotate-1">
        Dillon Steve Juriansz{" "}
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-7 h-7 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
