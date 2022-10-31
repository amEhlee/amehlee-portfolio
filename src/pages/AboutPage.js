import React from "react";
import wavehigh from "../assets/wave-high.svg";

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900">
        <h1 className="smaller-heading text-slate-300">About</h1>
        <div className="text-slate-500 font-light">
          <p>Hello my name is Elie Kabengele Junior Full-Stack Developer</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.
          </p>

          <ul className="grid mx-20 list-disc grid-cols-2 grid-rows-3 gap-x-20 place-items-center">
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
            <li>Spring</li>
          </ul>
        </div>
      </section>
      <img className="w-full" src={wavehigh} alt="wave svg"></img>
    </>
  );
}
