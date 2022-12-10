import React from "react";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="">
        <a href="#Home" className="no-underline text-black">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
              Elie Kabengele
            </span>
          </Navbar.Brand>
        </a>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <a href="#Home">
            <Navbar.Link>Home</Navbar.Link>
          </a>
          <a href="#About">
            <Navbar.Link>About</Navbar.Link>
          </a>
          <a href="#Projects">
            <Navbar.Link>Projects</Navbar.Link>
          </a>
          <a href="#Contacts">
            <Navbar.Link>Contact Me</Navbar.Link>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
