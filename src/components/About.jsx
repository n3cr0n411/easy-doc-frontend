import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div id="about" className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">Easy Doc</h1>
          <p className="py-4 text-xl">
            A system created to get help as early as possible to those in need.
            <br />
            This creates a collaborative platform for patients, their doctors
            and emergency response paramedics who need to know the medicala
            histroy of the patient in the moment of need.
          </p>

          {/* Card Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card */}
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Data Authentication"
              text="When medical records are accessed by the paramedics it is already been made sure that the records are authentic because only the patients doctor has edit permissions."
            />

            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Easy Manipulation"
              text="The medical records can be easily manipulated by the doctor with a few clicks and updation in the database for that particular session is almost instant. 
              EG:- If an underlying condition has been found the doctor can immediately update the information to include the patients new medications."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Data Security"
              text="As we all know medical data is sensitive information and can be misused if there is no level of security applied , hence the paramedics device would be requried to pass a JWT everytime a medical record is to be accessed only upon  verification will the information be released."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Ease of usage"
              text="Patient information, which would constantly be update from his/her own doctor which would ensure it's authenticity and accuracy and the paramedics would have access to this information almost instantly as this system requires the user to attach a QR code linked to his/her own profile."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
