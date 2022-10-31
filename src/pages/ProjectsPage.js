import React from "react";
import wavelow from "../assets/wave-low.svg";

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-rose-800">
        <h1 className="smaller-heading">Projects</h1>
        <h2>Capstone Peralta</h2>
      </section>
      <img className="w-full" src={wavelow} alt="wave svg"></img>
    </>
  );
}
