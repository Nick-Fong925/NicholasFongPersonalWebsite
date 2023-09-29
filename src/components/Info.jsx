import MyPhoto from "../assets/MyPhoto/NicholasFongPhoto.png";
import Github from "../assets/Logos/GithubLogo.png";
import LinkedInLogo from "../assets/Logos/LinkedinLogo.png";
import Gmail from "../assets/Logos/GmailLogo.png";

function Info() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-cente mt-20 mb-10">
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
      <div className="flex space-x-20 mt-14 mb-10 items-center justify-center">
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

    </>
  );
}

export default Info;
