import React from "react";

export default function HomePage() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* Bigger Text*/}
        <div>
          <p>Hi My Name is</p>
          <h1>Elie Kabengele</h1>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. I am currently seeking
            full time work as a web developer.
          </p>
        </div>
      </div>
    </section>
  );
}
