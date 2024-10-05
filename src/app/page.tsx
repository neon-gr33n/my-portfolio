import Image from "next/image";
import Card from "./components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div id="description">
        <p>
          Skylar Sweat is a USA based programmer and software engineer, 
          focusing on delivering high-quality products to the gaming community.
        </p>
        <p>
         He enjoys building games and websites that challenge his skill, and open doors to bettering himself as a developer.
        </p>
        <p>
         Outside of work, he greatly enjoys the outdoors, and music composition
        </p>
      </div>
      <div className="line"></div>
        <div className="grid gap-4 items-center grid-cols-1 sm:grid-cols-2">  
          <Card imageSrc={'/sm_hero_img.png'} alt={"SWAPPED MYTH logo"} contentHeading={"Programming"} contentParagraph={"Click here to open website"} linkHref={"https://gamejolt.com/games/swappedmyth/857058"}/>
          <Card imageSrc={'/gf_hero_img.png'} alt={"SWAPPED MYTH logo"} contentHeading={"Programming"} contentParagraph={"Click here to open website"} linkHref={"https://gamejolt.com/games/tg-fell-official/365971"}/>
          <Card imageSrc={'/fileogizer_py_hero_img.png'} alt={"SWAPPED MYTH logo"} contentHeading={"Programming"} contentParagraph={"Click here to open website"} linkHref={"https://gamejolt.com/games/tg-fell-official/365971"}/>
          <Card imageSrc={'/py-calc_hero_img.png'} alt={"SWAPPED MYTH logo"} contentHeading={"Programming"} contentParagraph={"Click here to open website"} linkHref={"https://gamejolt.com/games/tg-fell-official/365971"}/>        
      </div>  
      </main>
      <h1>Welcome to my portfolio website!</h1>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            >
            Contact
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/neon-gr33n"
            target="_blank"
            rel="noopener noreferrer"
            >
            Github
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="https://nextjs.org/icons/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Download Resume/CV →
            </a>
        </footer>
    </div>
  );
}
