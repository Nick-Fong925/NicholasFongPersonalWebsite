import GithubLogo from "../assets/Logos/GithubLogo.png";
import DemoLogo from "../assets/Logos/demo.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Project({ title, description, githubLink, demoLink, imgSrc, codingNames }) {
  const [imageStyle, setImageStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const aspectRatio = img.width / img.height;

      if (aspectRatio > 1) {
        // Horizontal photo
        setImageStyle({ width: "90%", height: "auto" });
      } else {
        // Vertical photo
        setImageStyle({ width: "50%", height: "auto" });
      }
    };
  }, [imgSrc]);

  return (
    <div className="py-5 l6">
      <div className="container py-10 mx-auto px-4 md:flex flex-row items-center rounded-xl bg-gray-100">
        <div className="mb-5 md:w-1/2 flex justify-center md:mr-10">
          <img src={imgSrc} alt={title} className="rounded-lg object-fit" style={imageStyle} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-5 text-violet-800">{title}</h2>
          <p className="text-black text-xs">{description}</p>
          <div className="flex space-x-4 mt-5 items-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="Github Icon" className="w-6 h-6" />
            </a>
            <p className="text-xs font-semibold mr-5">Repository</p>
            {demoLink !== "" && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img src={DemoLogo} alt="Demo Icon" className="w-12 h-12" />
              </a>
            )}
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 lg:grid-cols-4">
              {codingNames.map((name, index) => (
                <div key={index} className="text-xs font-bold border-2 rounded-lg border-violet-800 px-2 py-1 hover:bg-violet-800 hover:text-white">
                  {name}
                </div>
              ))}
            </div>
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
  demoLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  codingNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
