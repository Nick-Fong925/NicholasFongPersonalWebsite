import MyPhoto from "../assets/MyPhoto/NicholasFongPhoto.png";
import Github from "../assets/Logos/GithubLogo.png";
import LinkedInLogo from "../assets/Logos/LinkedinLogo.png";
import Gmail from "../assets/Logos/GmailLogo.png";
import schoolIcon from "../assets/Logos/schoolIcon.png";
import DegreeLogo from "../assets/Logos/DegreeLogo.png";
import GoalsettingIcon from "../assets/Logos/GoalsettingIcon.png";
import CodingLanguages from "../components/CodingLanguages";

function Info() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mt-20 mb-10">
        {/* Circular border for the photo */}
        <div className="ml-10 w-48 h-48 px-2 py-2 md:w-56 md:h-58 rounded-full border-4 border-gray-300 overflow-hidden">
          <img src={MyPhoto} alt="Nicholas Fong" className="w-full h-full object-cover" />
        </div>

        {/* Text on the right side */}
        <div className="md:ml-10">
          <h2 className="mb-5 font-semibold text-xl">Hi, my name is,</h2>
          <p className="text-5xl mb-5 font-bold">Nicholas Fong.</p>
          <p className="text-3xl font-bold text-black">
            I aim to address <span className="text-violet-600">business needs</span> with <span className="text-violet-600">technology</span>.
          </p>
        </div>
      </div>

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

      {/* Section with two main sections */}
      <div className="flex mt-1">
        {/* Left Section */}
        <div className="w-1/2 mr-5">
          <p className="text-xl font-bold mb-4 text-violet-500">About Me</p>
          <p className="text-gray-700 font-semibold">My programming journey began in the summer of 2022, and since then, I have been on an consistently pushing my boundaries and pursuing challenges. As a third-year student pursuing a combined degree in business and computer science, my aspiration is to evolve into a full-stack software developer at the dynamic intersection of business and technology.</p>
        </div>

        {/* Purple Line */}
        <div className="w-1 h-70 bg-violet-500 mx-4"></div>

        {/* Right Section */}
        <div className="w-1/2">
        <div className="flex flex-col space-y-12 justify-center ml-5">

  <div className="flex items-center justify-center">
    <img className="w-auto h-10 mr-5" src={schoolIcon} alt="LinkedIn" />
    <span className="ml-2 text-s font-semibold text-black"><span className="text-violet-500">University Of British Columbia</span>, Vancouver B.C</span>
  </div>

  <div className="flex items-center justify-center">
    <img className="w-auto h-10 mr-5" src={DegreeLogo} alt="GitHub" />
    <span className="ml-2 font-semibold text-black-500">Combined Major of <span className="text-violet-500">Business</span> and <span className="text-violet-500">Computer Science</span></span>
  </div>

  <div className="flex items-center justify-center mr-1">
    <img className="w-auto h-12 mr-5" src={GoalsettingIcon} alt="Gmail" />
    <span className="ml-2 font-semibold text-black"><span className="text-violet-500">2023 Goals:</span> Generative AI Projects, Learning More About Web3, Develop My First Game</span>
  </div>
</div>


      </div>
      </div>
      
<CodingLanguages/>
    </>
  );
}

export default Info;
