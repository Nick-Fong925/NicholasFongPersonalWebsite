import MyPhoto from "../assets/MyPhoto/NicholasFongPhoto.png";
import Github from "../assets/Logos/GithubLogo.png";
import LinkedInLogo from "../assets/Logos/LinkedinLogo.png";
import Gmail from "../assets/Logos/GmailLogo.png";
import CodingLanguages from "../components/CodingLanguages";
import TypewriterText from "./TyperWriter";


function Info() {

  
  return (
    <>
     <div className="flex flex-col md:flex-row items-center mt-20 mb-10">
  {/* Circular border for the photo */}
  <div className="ml-2 w-48 h-48 px-2 py-2 md:w-56 md:h-58 rounded-full border-4 border-gray-300 overflow-hidden">
    <img
      src={MyPhoto}
      alt="Nicholas Fong"
      className="w-full h-full object-contain "
    />
  </div>
  <div className="md:ml-10">
    <TypewriterText />
  </div>

      {/*
       <div className="flex space-x-20 mt-14 mb-16 items-center justify-center">
       <a href="https://github.com/Nick-Fong925" target="_blank" rel="noopener noreferrer">
           <img className="w-auto h-10" src={Github} alt="GitHub"></img>
       </a>
       <a href="mailto:nicholasfong1120@gmail.com" rel="noopener noreferrer">
           <img className="w-auto h-8" src={Gmail} alt="Gmail"></img>
       </a>
       <a href="https://www.linkedin.com/in/nicholas-fong-1425b8221/" target="_blank" rel="noopener noreferrer">
           <img className="w-auto h-10" src={LinkedInLogo} alt="LinkedIn"></img>
       </a>
   </div>
        */}
      </div>

 

      {/* Section with two main sections */}
      <div className="flex mt-1">
        {/* Left Section */}
        <div className="w-full  mr-5">
          <p className="text-xl font-bold mb-4 text-violet-800">About Me</p>
          <p className="text-gray-700 font-semibold text-lg">I'm currently a student at the University of British Columbia. My programming journey began in the summer of 2022, and since then, I have been consistently pushing my boundaries and pursuing challenges. As a third-year student pursuing a combined degree in business and computer science, my aspiration is to evolve into a full-stack software developer at the dynamic intersection of business and technology.</p>
        </div>


      </div>
      
<CodingLanguages/>
    </>
  );
}

export default Info;
