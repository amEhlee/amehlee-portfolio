import React from "react";

export default function Hero() {
  return (
    <section className="bg-slate-900 pb-56">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* Bigger Text*/}
        <div>
          <h1 className="text-blue-300">Hi, my name is</h1>
          <div>
            <h1 className="big-heading text-slate-300">Elie Kabengele.</h1>
            <h1 className="smaller-heading text-slate-400">
              Full-Stack Developer
            </h1>
          </div>
          <p className="max-w-md-w-3lg text-slate-500 font-light">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. I am currently working as a Frontend
            Developer for <p className="font-bold inline-block">New Idea Machine</p> and seeking further work as a fullstack developer.
          </p>
        </div>
      </div>
    </section>
  );
}
