import Image from "next/image";
import Card from "../components/ui/card";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>Download my Resume/CV</h1>
        <br></br>
        <p>The file should automatically start downloading,
           if it doesn't start downloading shortly 
        </p>
        <span><a href="">click here to manually start downloading the file.</a></span>
      </main>
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
