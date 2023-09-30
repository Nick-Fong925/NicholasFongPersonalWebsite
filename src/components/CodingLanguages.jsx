import C from '../assets/CodingLogos2/C.png';
import CSS from '../assets/CodingLogos2/CSS.png';
import Express from '../assets/CodingLogos2/Express.png';
import HTML from '../assets/CodingLogos2/HTML.png';
import JavaScript from '../assets/CodingLogos2/JavaScript.png';
import Java from '../assets/CodingLogos2/Java.png';
import Jira from '../assets/CodingLogos2/Jira.png';
import MongoDB from '../assets/CodingLogos2/MongoDB.png';
import Netlify from '../assets/CodingLogos2/Netlify.png';
import Python from '../assets/CodingLogos2/Python.png';
import ReactLogo from '../assets/CodingLogos2/React.png';
import Tailwind from '../assets/CodingLogos2/Tailwind.png';
import SQL from '../assets/CodingLogos2/SQL.png';
import Github from '../assets/Logos/GithubLogo.png';
import PHP from '../assets/CodingLogos2/PHP.png';

function CodingLanguages() {
  const languages = [
    { logo: JavaScript, name: 'JavaScript' },
    { logo: Java, name: 'Java' },
    { logo: C, name: 'C' },
    { logo: Python, name: 'Python' },
  ];

  const frontendFrameworks = [
    { logo: HTML, name: 'HTML' },
    { logo: CSS, name: 'CSS' },
    { logo: ReactLogo, name: 'React' },
    { logo: Tailwind, name: 'Tailwind' },
  ];

  const backendFrameworks = [
    { logo: Express, name: 'Express' },
    { logo: MongoDB, name: 'MongoDB' },
    { logo: SQL, name: 'SQL' },
    { logo: PHP, name: 'PHP' },
  ];

  const developerTools = [
    { logo: Github, name: 'Github' },
    { logo: Jira, name: 'Jira' },
    { logo: Netlify, name: 'Netlify' },
  ];

  return (
    <div className="py-10 rounded-xl mt-16 md:flex flex-row md:border-4 md:border-violet-800 md:mb-20">
      {/* Buttons for Mobile */}

      {/* Languages Section */}
      <div className="md:ml-5 lg:ml-16 w-full md:w-1/4">
        <h2 className="mb-5 font-bold">Languages</h2>
        {languages.map((lang, index) => (
          <div
            key={index}
            className={`ml-5 mt-4 md:mt-10 flex items-center mb-2 md:mb-4 font-semibold ${
              // Add classes for smaller logos on md screens
              index > 0 ? 'md:ml-1' : '' // Adjust the margin between logos
            }`}
          >
            <img src={lang.logo} alt={lang.name} className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
            <span className="md:text-xs lg:text-m">{lang.name}</span>
          </div>
        ))}
      </div>

      {/* Frontend Section */}
      <div className="ml-16 w-full md:w-1/4">
        <h2 className="mb-5 font-bold">Frontend</h2>
        {frontendFrameworks.map((framework, index) => (
          <div
            key={index}
            className={`ml-5 mt-4 md:mt-10 flex items-center mb-2 md:mb-4 font-semibold ${
              // Add classes for smaller logos on md screens
              index > 0 ? 'md:ml-1' : '' // Adjust the margin between logos
            }`}
          >
            <img src={framework.logo} alt={framework.name} className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
            <span className="md:text-xs lg:text-m">{framework.name}</span>
          </div>
        ))}
      </div>

      {/* Backend Section */}
      <div className="ml-16 w-full md:w-1/4">
        <h2 className="mb-5 font-bold">Backend</h2>
        {backendFrameworks.map((framework, index) => (
          <div
            key={index}
            className={`ml-5 mt-4 md:mt-10 flex items-center mb-2 md:mb-4 font-semibold ${
              // Add classes for smaller logos on md screens
              index > 0 ? 'md:ml-1' : '' // Adjust the margin between logos
            }`}
          >
            <img src={framework.logo} alt={framework.name} className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
            <span className="md:text-xs lg:text-m">{framework.name}</span>
          </div>
        ))}
      </div>

      {/* Developer Tools Section */}
      <div className="ml-16 w-full md:w-1/4 mr-20">
        <h2 className="mb-5 font-bold">Developer Tools</h2>
        {developerTools.map((tool, index) => (
          <div
            key={index}
            className={`ml-5 mt-4 md:mt-10 flex items-center mb-2 md:mb-4 font-semibold ${
              // Add classes for smaller logos on md screens
              index > 0 ? 'md:ml-1' : '' // Adjust the margin between logos
            }`}
          >
            <img src={tool.logo} alt={tool.name} className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
            <span className="md:text-xs lg:text-m">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodingLanguages;
