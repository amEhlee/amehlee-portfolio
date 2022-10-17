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
    <li className="">
      <a href={props.refrencetag}>
        <span className="text-black-600 font-bold">{props.numbering}</span>
        {props.content}
      </a>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="flex items-center py-4 justify-between bg-slate-600">
      <div className="Logo ml-8">
        <a href="#home">Logo</a>
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 mr-4">
        <NavBarItem
          refrencetag=" #about "
          numbering=" 01. "
          content=" About "
        />
        <NavBarItem
          refrencetag="#experience"
          numbering="02. "
          content="Experience"
        />
        <NavBarItem
          refrencetag="#projects"
          numbering="03. "
          content="Projects"
        />
        <NavBarItem refrencetag="#contact" numbering="04. " content="Contact" />
      </ul>
      <div className="flex sm:hidden justify-end mr-12 cursor-pointer md:hidden bg-slate-500 fixed inset-0 left-1/4">
        <HamburgerMenuSVG />
      </div>
    </nav>
  );
}
