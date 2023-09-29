import C from "../assets/CodingLogos2/C.png";
import CSS from "../assets/CodingLogos2/CSS.png";
import Express from "../assets/CodingLogos2/Express.png";
import HTML from "../assets/CodingLogos2/HTML.png";
import JavaScript from "../assets/CodingLogos2/JavaScript.png";
import Java from "../assets/CodingLogos2/Java.png";
import Jira from "../assets/CodingLogos2/Jira.png";
import MongoDB from "../assets/CodingLogos2/MongoDB.png";
import Netlify from "../assets/CodingLogos2/Netlify.png";
import Python from "../assets/CodingLogos2/Python.png";
import ReactLogo from "../assets/CodingLogos2/React.png";
import Tailwind from "../assets/CodingLogos2/Tailwind.png";
import SQL from "../assets/CodingLogos2/SQL.png";

function CodingLanguages() {
  const languages = [
    { logo: JavaScript, name: "JavaScript" },
    { logo: Java, name: "Java" },
    { logo: C, name: "C" },
    { logo: CSS, name: "CSS" },

    { logo: Python, name: "Python" },
  ];

  const frontendFrameworks = [
    { logo: HTML, name: "HTML" },
    { logo: CSS, name: "CSS" },
    { logo: ReactLogo, name: "React" },
    { logo: Tailwind, name: "Tailwind" },
  ];

  const backendFrameworks = [
    { logo: Express, name: "Express" },
    { logo: MongoDB, name: "MongoDB" },
    { logo: SQL, name: "SQL" },
  ];

  const developerTools = [
    { logo: Jira, name: "Jira" },
    { logo: Netlify, name: "Netlify" },
  ];

  return (
    <div className="flex flex-col border-2 border-violet-500 py-10 rounded-xl mt-16 mb-20 md:flex-row">
      <div className="ml-16 md:w-1/4">
      <h2 className="mb-5 font-bold">Languages</h2>
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center mb-4 font-semibold">
            <img src={lang.logo} alt={lang.name} className="w-8 h-8 mr-2" />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
      <div className="md:w-1/4">
      <h2 className="mb-5 font-bold">Frontend</h2>
        {frontendFrameworks.map((framework, index) => (
          <div key={index} className="flex items-center mb-4 font-semibold">
            <img src={framework.logo} alt={framework.name} className="w-8 h-8 mr-2" />
            <span>{framework.name}</span>
          </div>
        ))}
      </div>
      <div className="md:w-1/4">
      <h2 className="mb-5 font-bold">Backend</h2>
        {backendFrameworks.map((framework, index) => (
          <div key={index} className="flex items-center mb-4 font-semibold">
            <img src={framework.logo} alt={framework.name} className="w-8 h-8 mr-2" />
            <span>{framework.name}</span>
          </div>
        ))}
      </div>
      <div className="md:w-1/4">
      <h2 className="mb-5 font-bold">Developer Tools</h2>
        {developerTools.map((tool, index) => (
          <div key={index} className="flex items-center mb-4 font-semibold">
            <img src={tool.logo} alt={tool.name} className="w-8 h-8 mr-2" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodingLanguages;
