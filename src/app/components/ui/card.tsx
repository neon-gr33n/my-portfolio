import Image, { StaticImageData } from "next/image";
import React from "react";

// Define the props interface
interface CardProps {
    imageSrc: string | StaticImageData; // Ensure imageSrc is a string or StaticImageData
    alt: string;
    contentHeading: string;
    contentParagraph: string;
    linkHref: string;
}


const Card: React.FC<CardProps> = ({
    imageSrc,
    alt,
    contentHeading,
    contentParagraph,
    linkHref
}) => {
    return (
        <>
            <a href={linkHref} target="_blank" className="group relative block">
            <div className="img-container">
                <Image
                    alt={alt}
                    src={imageSrc}
                    className="h-full opacity-100 right-28 transition-opacity group-hover:opacity-50"
                    width={1920}
                    height={1080}
                />
                <div className="img-desc">
                    <h1 className="dark:text-white">{contentHeading}</h1>
                    <p className="dark:text-white">{contentParagraph}</p>
                </div>
            </div>
            </a>
        </>
    );   
};

export default Card;