import React from "react";

export default function HomePage() {
  return (
    <section className="relative bg-indigo-900">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* Bigger Text*/}
        <div>
          <h1>Hi My Name is</h1>
          <h3>Elie Kabengele</h3>
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
