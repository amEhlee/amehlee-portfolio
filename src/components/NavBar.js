import React from "react";

function HamburgerMenuSVG() {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20" fill="white"></rect>
      <rect y="30" width="100" height="20" fill="white"></rect>
      <rect y="60" width="100" height="20" fill="white"></rect>
    </svg>
  );
}

function NavBarItem(props) {
  return (
    <li className="text-slate-300">
      <a href={props.refrencetag}>{props.content}</a>
    </li>
  );
}

export default function NavBar() {
  return (
    <div className="bg-slate-900">
      <nav className="flex items-center py-4 justify-between font-medium mx-10">
        <div className="text-slate-300">
          <a href="#home">ELIE K</a>
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12">
          <NavBarItem refrencetag=" #about" content=" About " />
          <NavBarItem refrencetag="#experience" content="Experience" />
          <NavBarItem refrencetag="#projects" content="Projects" />
          <NavBarItem refrencetag="#contact" content="Contact" />
        </ul>
        <div className="flex sm:hidden justify-end mr-12 cursor-pointer md:hidden  fixed inset-0 left-1/4">
          <HamburgerMenuSVG />
        </div>
      </nav>
    </div>
  );
}
