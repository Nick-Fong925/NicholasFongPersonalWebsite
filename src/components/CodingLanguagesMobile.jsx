import { useState } from 'react';
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
import VSCODE from '../assets/CodingLogos2/VSCODE.png';

function CodingLanguagesMobile() {
  const [activeSection, setActiveSection] = useState('Languages');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? 'Languages' : sectionName);
  };

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
    { logo: VSCODE, name: 'VS Code' },
    { logo: Jira, name: 'Jira' },
    { logo: Netlify, name: 'Netlify' },
  ];

  return (
    <div className="py-10 rounded-xl mt-16 md:flex flex-row md:border-4 md:border-violet-800 md:mb-20">
      {/* Buttons for Mobile */}
      <div className="md:hidden text-center">
        <button
          className={`bg-violet-600 hover:bg-violet-900 text-white font-bold py-1 px-2 rounded m-1 ${
            activeSection === 'Languages' ? 'bg-blue-600' : ''
          }`}
          onClick={() => toggleSection('Languages')}
        >
          Languages
        </button>
        <button
          className={`bg-violet-600 hover.bg-violet-900 text-white font-bold py-1 px-2 rounded m-1 ${
            activeSection === 'Frontend' ? 'bg-blue-600' : ''
          }`}
          onClick={() => toggleSection('Frontend')}
        >
          Frontend
        </button>
        <button
          className={`bg-violet-600 hover:bg-violet-900 text-white font-bold py-1 px-2 rounded m-1 ${
            activeSection === 'Backend' ? 'bg-blue-600' : ''
          }`}
          onClick={() => toggleSection('Backend')}
        >
          Backend
        </button>
        <button
          className={`bg-violet-600 hover:bg-violet-900 text-white font-bold py-1 px-2 rounded m-1 ${
            activeSection === 'Developer Tools' ? 'bg-blue-600' : ''
          }`}
          onClick={() => toggleSection('Developer Tools')}
        >
          Developer Tools
        </button>
      </div>

      {/* Languages Section */}
      <div className="ml-16 w-1/4 sm:block">
        <h2 className="mb-5 font-bold hidden md:block">Languages</h2>
        {activeSection === 'Languages' &&
          languages.map((lang, index) => (
            <div key={index} className="ml-5 mt-10 md:mt-0 flex items-center mb-4 font-semibold">
              <img src={lang.logo} alt={lang.name} className="w-8 h-8 mr-4" />
              <span>{lang.name}</span>
            </div>
          ))}
      </div>

      {/* Frontend Section */}
      <div className={`ml-16 w-1/4 sm:${activeSection === 'Frontend' ? 'block' : 'hidden'}`}>
        <h2 className="mb-5 font-bold hidden md:block">Frontend</h2>
        {activeSection === 'Frontend' &&
          frontendFrameworks.map((framework, index) => (
            <div key={index} className="ml-5 mt-10 md:mt-0 flex items-center mb-4 font-semibold">
              <img src={framework.logo} alt={framework.name} className="w-8 h-8 mr-4" />
              <span>{framework.name}</span>
            </div>
          ))}
      </div>

      {/* Backend Section */}
      <div className={`ml-16 w-1/4 sm:${activeSection === 'Backend' ? 'block' : 'hidden'} md:block lg:block`}>
        <h2 className="font-bold hidden md:block">Backend</h2>
        {activeSection === 'Backend' &&
          backendFrameworks.map((framework, index) => (
            <div key={index} className="ml-5 mt-10 md:mt-0 flex items-center mb-4 font-semibold">
              <img src={framework.logo} alt={framework.name} className="w-8 h-8 mr-4" />
              <span>{framework.name}</span>
            </div>
          ))}
      </div>

      {/* Developer Tools Section */}
      <div className={`ml-16 w-1/4 md:mr-20 sm:mr-0 sm:${activeSection === 'Developer Tools' ? 'block' : 'hidden'}`}>
        <h2 className="mb-5 font-bold hidden md:block">Developer Tools</h2>
        {activeSection === 'Developer Tools' &&
          developerTools.map((tool, index) => (
            <div key={index} className="ml-5 mt-10 md:mt-0 flex items-center mb-4 font-semibold">
              <img src={tool.logo} alt={tool.name} className="w-8 h-8 mr-4" />
              <span>{tool.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CodingLanguagesMobile;
