import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
          color: `black`
        }}
      >
      <button className="hamburger hamburger--elastic" type="button"
            aria-label="Menu" aria-controls="navigation">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>


        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about">
                <p>About</p>
            </Link>
            </li>
        <li>
            <Link href="/resume">
                <p>Resume</p>
            </Link>
            </li>
              <li>
                <Link href="/contacts">
                  <p>Contact</p>
                </Link>
              </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;