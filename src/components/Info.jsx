import MyPhoto from "../assets/MyPhoto/NicholasFongPhoto.png";
import CodingLanguagesMobile from "./CodingLanguagesMobile";
import CodingLanguages from "../components/CodingLanguages";
import TypewriterText from "./TyperWriter";


function Info() {

  
  return (
    <>
     <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mb-10">
  {/* Circular border for the photo */}
  <div className="w-48 h-48 mb-10 ml-2 py-2 md:w-56 md:h-58 rounded-full border-4 border-gray-300 overflow-hidden">
    <img
      src={MyPhoto}
      alt="Nicholas Fong"
      className="w-full h-full object-contain"
    />
  </div>
  <div className="md:ml-10">
    <TypewriterText />
  </div>

    
      </div>

 

      {/* Section with two main sections */}
      <div className="flex mt-1">
        {/* Left Section */}
        <div className="w-full  mr-5">
          <p className="text-m font-bold mb-4 text-violet-800 md:text-xl">About Me</p>
          <p className="sm:text-s text-gray-700 font-semibold md:text-m">I{"'"}m currently a student at the <span className="text-violet-800">University of British Columbia</span>.  My programming journey began in the summer of 2022, and since then, I have been consistently pushing my boundaries and seeking challenges. As a third-year student pursuing a combined degree in <span className="text-violet-800">Business</span> and <span className="text-violet-800">Computer Science</span>, my aspiration is to evolve into a full-stack software developer at the dynamic intersection of business and technology.
          <br/>
          <br/>
          My goals for 2023 include, <span className="text-violet-800">creating generative AI projects</span>, learning how to effectively <span className="text-violet-800">leverage AI tools </span> to improve work effeciency, and taking my first look into the <span className="text-violet-800">Web3</span> space. If I am not researching or coding my next project you will find me practicing my forehand at the tennis court or at the range working on my swing. 
          </p>
        </div>


      </div>
      
<div className="hidden md:block"><CodingLanguages/></div>
<div className="md:hidden"><CodingLanguagesMobile/></div>
    </>
  );
}

export default Info;
