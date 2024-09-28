import Image from "next/image";
import React from "react";

const Card = ({imageSrc, alt, content}) => {
    return (
        <>
            <a href="#" className="group relative block">
            <div className="img-container">
                <Image
                    alt={alt}
                    src={imageSrc}
                    className="h-full opacity-100 right-28 transition-opacity group-hover:opacity-50"
                    width={1920}
                    height={1080}
                />
            </div>

            <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <p className="text-4xl align-middle text-white">
                        {content}
                    </p>
                </div>
                </div>
            </div>
            </a>
        </>
    );   
};

export default Card;