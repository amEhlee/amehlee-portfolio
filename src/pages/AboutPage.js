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

          <div className="bg-rose-400 w-6 h-6 shieldIcons"/>

          <div>
            <img className="shieldIcons" alt="shield icon"src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=whit" />
            <img alt="shield icon" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img alt="shield icon" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img alt="shield icon" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
            <img alt="shield icon" src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white" />
            <img alt="shield icon" src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white" />
          </div>

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
