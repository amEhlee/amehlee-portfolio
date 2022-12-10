import React from "react";
import { Card } from "flowbite-react";

function AboutCard({ Heading, Languages, Description, ImageSource }) {
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={ImageSource}
          alt={`${Heading}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
          {Heading}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {Languages}
          <div className="flex lg:flex-col lg:items-center m-1 gap-2">
            <img
              alt="shield 1"
              src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            />
            <img
              alt="shield 2"
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
            />
            <img
              alt="shield 3"
              src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
            />
          </div>
        </span>
        <p className="mt-6 text-center">{Description}</p>
      </div>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 px-[20vw]">
        <h1 className="smaller-heading text-slate-300">About</h1>
        <p className="max-w-md-w-3lg text-slate-500 font-light">
          Starting from my humble days coding small indie projects I've come a
          long way. I've done remote work for a variety of groups and projects
          and collaborated with talent far above myself to reach a common goal.
          Now coming from SAIT with a new perspective in web development let me
          hear about your project and moreso how I can help!
        </p>
        <div className="flex sm:flex-col lg:flex-row gap-4">
          <AboutCard
            ImageSource="https://images.pexels.com/photos/10721746/pexels-photo-10721746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Frontend"
            Languages="React, Tailwind, MUI"
            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!"
          />
          <AboutCard
            ImageSource="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Design"
            Languages="UX UI Figma, Adobe XD, CSP"
            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!"
          />
          <AboutCard
            ImageSource="https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            Heading="Backend"
            Languages="Node.Js, Spring Boot, Express, MongoDB"
            Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!"
          />
        </div>
      </section>
    </>
  );
}
