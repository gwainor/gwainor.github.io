import * as React from "react";

export const HomePage = () => {
  return (
    <div className="absolute top-0 left-0 z-50 grid h-screen w-full grid-cols-2 gap-14">
      <NavBar />
      <SocialBar />
      <section className="flex flex-col justify-center">
        <div className="flex flex-col self-end">
          <h3 className="text-2xl">Hello, I'm</h3>
          <h1 className="text-6xl font-black">Gökhan Öztürk</h1>
          <h4 className="mt-1 text-2xl text-gray-400 italic">
            Jack of all trades, master of some
          </h4>
        </div>
      </section>
      <section className="flex flex-col justify-center gap-8">
        <div className="w-lg text-lg">
          <p>Building robust, user-focused software is my specialty.</p>
          <p>
            I turn ideas into reality by crafting scalable solutions that
            <br />
            drive growth and efficiency.
          </p>
          {/* <p>Let’s build something extraordinary together.</p> */}
        </div>
        <div>
          <button className="glowing-button px-10 py-2 text-2xl">
            <span className="text-white">Let's talk</span>
          </button>
        </div>
      </section>
    </div>
  );
};

const SocialBar = () => {
  return (
    <div className="flex-center absolute top-0 bottom-0 left-0 flex-col bg-black text-white">
      <a
        href="https://www.linkedin.com/in/gwainor/"
        className="p-4 hover:text-gray-400"
      >
        <i className="fa-brands fa-linkedin text-4xl"></i>
      </a>
      <a href="https://github.com/gwainor" className="p-4 hover:text-gray-400">
        <i className="fa-brands fa-github text-4xl"></i>
      </a>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="absolute top-0 right-0 flex bg-black">
      {[
        ["HOME", "/"],
        ["ABOUT", "/about"],
        ["PROJECTS", "/projects"],
        ["CONTACT", "/contact"],
      ].map(([name, href]) => (
        <NavBarItem key={name} name={name} href={href} />
      ))}
    </nav>
  );
};

const NavBarItem = ({ name, href }: { name: string; href: string }) => {
  const isCurrent = CURRENT_PAGE === href;
  return (
    <a
      href={href}
      className={`current:bg-primary px-5 py-3 text-lg text-white ${isCurrent ? "current" : ""}`}
    >
      {name}
    </a>
  );
};
