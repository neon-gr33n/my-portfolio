import Image from "next/image";
import React from "react";

const Card = ({imageSrc, alt, contentHeading, contentParagraph, linkHref}) => {
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
                    <h1>{contentHeading}</h1>
                    <p>{contentParagraph}</p>
                </div>
            </div>
            </a>
        </>
    );   
};

export default Card;