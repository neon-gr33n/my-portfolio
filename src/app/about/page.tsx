import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <h1>About me</h1>
        <p>Skylar "Neon-Gr33n" Sweat is a game developer, tester, and web developer hailing from the Southern US.
            ever since he reached the tender age of 8 years old, he aspired to create new things, his own worlds, 
            his own games, and other creative works such as this very website you're on right now!
        </p>
        <p>
            Although he has no formal education in computer science, or web/software development, such as a degree in Software Engineering or Computer Science, 
            Skylar has become an efficient self-taught developer, always exploring new concepts and eager to broaden his horizons along his
            developer journey, striving to be the very best developer he can be.</p>
        <p>His experience is primarily within the web and game development spaces, experienced with common front end tools such as</p>
        <br></br>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>CSS Precompilers (SASS, Post CSS, etc)</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Next.js</li>
          <li>React</li>
        </ol>
        <br></br>
        <p>He is also experienced with a number of game engines such as Unity, Unreal Engine, Godot and GameMaker, although there's alwasy the possibility of learning more!</p>
        <br></br>
        <h1>Interested? contact me for work <span><a href="/contact">here!</a></span></h1>
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
