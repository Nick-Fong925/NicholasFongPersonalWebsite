import Github from "../assets/Logos/GithubLogo.png";
import LinkedInLogo from "../assets/Logos/LinkedinLogo.png";

function Contact2() {
  return (
    <div className="mt-10">
        <div className="flex flex-col justify-center items-center">   
     <h2 className="font-semibold text-3xl mb-2 text-violet-800">Let{"'"}s Connect!</h2>
      <p className="text-lg mb-2">604-218-3359</p>
      <p className="text-lg mb-2">nicholasfong1120@gmail.com</p></div>
  
      <div className="flex space-x-20 mt-5 mb-16 items-center justify-center">
       <a href="https://github.com/Nick-Fong925" target="_blank" rel="noopener noreferrer">
           <img className="w-auto h-10" src={Github} alt="GitHub"></img>
       </a>
       <a href="https://www.linkedin.com/in/nicholas-fong-1425b8221/" target="_blank" rel="noopener noreferrer">
           <img className="w-auto h-10" src={LinkedInLogo} alt="LinkedIn"></img>
       </a>
   </div>

   <div className="flex-row mt-4 text-center">
        <p className="">Made with Love in React</p>
        <p className="">Nicholas Fong 2023</p>
      </div>

    </div>
  )
}

export default Contact2
