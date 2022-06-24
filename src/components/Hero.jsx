import React from "react";

import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Easy Doc</h1>
        <h1 className="py-2">
          <span className="blue">Instant</span> Healthcare
        </h1>
        <p className="text-xl py-4">
          Instant healthcare solutions in case of emergencies, for paramedics
          and general users alike.
        </p>
        <div>
          <a href="#about">
            <button className="m-2">Features</button>
          </a>
          <a href="#main">
            <button className="m-2">Main Focus</button>
          </a>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total Patients <span className="blue">Secured : </span> 34551
        </p>
      </div>
    </div>
  );
};

export default Hero;
