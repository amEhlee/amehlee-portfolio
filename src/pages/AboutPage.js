import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-rose-700">
      <h2 className="">Hi. Nice to Meet You!</h2>
      <p>Hello my name is Elie Kabengele Junior Full-Stack Developer</p>
      <p>
        I am a seasoned software expert who has developed products for
        enterprise clients such as Intuit, Yale University, and Hewlett-Packard
        (HP), as well as many venture-backed businesses. I specialize in
        building applications specific to the business needs of my clients. I
        have done work in software development, mobile app creation,
        front-end/back-end web, database/server management, graphic design, and
        video game development.
      </p>
      <p>
        I am passionate about building excellent software that improves the
        lives of those around me. I specialize in creating software for clients
        ranging from individuals and small-businesses all the way to large
        enterprise corporations. What would you do if you had a software expert
        available at your fingertips?
      </p>

        <ul className="grid list-disc grid-cols-2 grid-rows-3 gap-x-20">
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>Python</li>
          <li>Spring</li>
        </ul>
    </section>
  );
}
