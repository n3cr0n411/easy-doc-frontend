import React from "react";
import terminal from "../assets/terminal.jpg";

const Developers = () => {
  return (
    <div id="main" className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>
            Superpowers for <span className="blue">paramedics</span>.
          </h1>
          <br />
          <p>
            A system designed with{" "}
            <span className="blue">paramedic assistance</span> in mind{" "}
            <span className="blue">for quickly accessing</span> patient
            information in case of an emergency. This enables the healthcare
            system to work at a higher efficiency rate than ever before,
            providing the best healthcare by making essential information
            readily available.
            <br />
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            className="max-w-[350px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
