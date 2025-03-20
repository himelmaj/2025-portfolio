"use client";
import Image from "next/image";
import { useState } from "react";

interface HoverImageProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
}

const HoverImage = ({ text, imageSrc, imageAlt }: HoverImageProps) => {
    const [hover, setHover] = useState(false);
  return (
    <>

    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

    </span>


    {hover && (
        <div className="absolute z-10">
            <Image src={imageSrc} alt={imageAlt} />
            <p>{text}</p>
        </div>
    )}
    
    
    </>
  )
}

export default HoverImage