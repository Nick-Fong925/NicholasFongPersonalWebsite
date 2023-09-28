import PropTypes from "prop-types";
import CapLogo from "../assets/Worklogo/CapLogoBlack.png"
import ExpressLogo from "../assets/CodingLogos/ExpressLogo.png";
import MongoDBLogo from "../assets/CodingLogos/MongoDBLogo.png";
import ReactLogo from "../assets/CodingLogos/ReactLogo.png";
import TailwindCSSLogo from "../assets/CodingLogos/TailwindCSSLogo.png";

function WorkExperiences() {
  return (
    <div className=" py-24 lg:py-16">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="md:w-1/3">
          <img src={CapLogo} alt="WorkLogo" className="rounded-lg mr-0 md:mr-10" />
          <div className="md:w-1/2">
          </div>
          <div className="flex space-x-4">
          <img  src={ReactLogo} alt="coding logo" className="w-15 h-8" />
          <img  src={ExpressLogo} alt="coding logo" className="w-15 h-8" />
          <img  src={MongoDBLogo} alt="coding logo" className="w-15 h-8" />
          <img  src={TailwindCSSLogo} alt="coding logo" className="w-15 h-8" />

          </div>
        </div>
        
        </div>
      </div>

  );
}


export default WorkExperiences;
