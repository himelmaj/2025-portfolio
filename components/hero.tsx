"use client";

import ExternalLink from "./ui/external-link";

const Hero = () => {
  return (
    <div className=" md:w-sm flex flex-col gap-5 text-pretty">
      <div className="flex flex-wrap gap-2">
        <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-b-[12px] border-transparent border-b-current"></div>
        <div className="h-3 w-3 bg-current" />
        <div className="h-3 w-3 bg-current rounded-full" />
      </div>
      <p>
        Himel Majumder is a web developer and designer interested in ideas surrounding technology, design, the arts, e-sports, & artificial intelligence.
      </p>

      <p>
        Currently searching for a full-time position in web development or interesing projects to work on.
      </p>

      <p>
        Building <ExternalLink href="https://sinsajo.vercel.app" className=" opacity-100 underline">Sinsajo</ExternalLink> a social media platform where you can share your thoughts, photos, and videos with your friends and family.
      </p>
    </div>
  )
}

export default Hero

