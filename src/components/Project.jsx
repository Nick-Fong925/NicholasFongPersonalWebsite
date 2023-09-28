import GithubLogo from "../assets/Logos/GithubLogo.png";
import PropTypes from "prop-types";

function Project({ title, description, githubLink, imgSrc, codingLogos }) {
  return (
    <div className=" py-24 lg:py-16">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="ml-6 md:w-1/2 mr-10">
          <img src={imgSrc} alt={title} className="rounded-lg mr-0 md:mr-10" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold  mb-5 text-black">{title}</h2>
          <p className="text-black text-xs">{description}</p>
          <div className="flex space-x-4 mt-10">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="Github Icon" className="w-8 h-8" />
            </a>
          </div>
          <div className="flex space-x-4 mt-10">
            {Object.keys(codingLogos).map((key) => (
              <img key={key} src={codingLogos[key]} alt={`${key} Logo`} className="w-15 h-8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  codingLogos: PropTypes.object.isRequired,
};

export default Project;
