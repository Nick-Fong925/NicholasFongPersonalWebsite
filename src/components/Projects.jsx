import BiteBook from "../assets/ProjectImages/BiteBook.png";
import CAP from "../assets/ProjectImages/CAP.png";
import DailyBoost from "../assets/ProjectImages/DailyBoost.png";
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
import Project from "./Project";

function Projects() {
    const ProjectData = [
        {
          title: "BiteBook",
          description:
            "BiteBook seeks to help businesses that struggle with marketing by providing a platform for foodies, families, and friends to share restaurants and build a community around local eateries. The inspiration for BiteBook is the oldest form of marketing - word of mouth, instead of those restaurant names or pictures being lost in the family group chat, find them all in one place, BiteBook!",
          githubLink: "https://github.com/Nick-Fong925/BiteBook",
          demoLink:"",
          imgSrc: BiteBook,
          codingLogos: {
            react: ReactLogo,
            tailwindcss: Tailwind,
            express: Express,
            mongodb: MongoDB,
          },
        },

        {
            title: "Daily Boost",
            description:
              "Daily Boost is an innovative mobile app designed to motivate individuals to embrace an active and healthy lifestyle by leveraging the power of social media and community building. In today's fast-paced world, finding the motivation to exercise regularly can be challenging. Daily Boost aims to change that by creating a supportive and engaging environment for fitness enthusiasts and beginners alike",
            githubLink: "https://github.com/myung03/produHacks",
            imgSrc: DailyBoost,
            demoLink:"",
            codingLogos: {
              react: ReactLogo,
              tailwindcss: Tailwind,
              express: Express,
              mongodb: MongoDB,
            },
          },

          
        {
          title: "CAP Website",
          description:
            "The Campus Ambassador Program Website is a dynamic online platform designed to serve as an effective marketing tool for showcasing campus events and highlighting club members. This website aims to create a vibrant online presence for campus activities, fostering engagement and participation among students.",
          githubLink: "https://github.com/Nick-Fong925/CAPWeb",
          imgSrc: CAP,
          demoLink:"https://nick-fong925.github.io/CAPWeb/",
          codingLogos: {
            react: ReactLogo,
            tailwindcss: Tailwind,

          },
        },
      
        
      ];

  return (
    <div>  
        {ProjectData.map((projectData, index) => (
        <Project
          key={index}
          title={projectData.title}
          description={projectData.description}
          githubLink={projectData.githubLink}
          demoLink={projectData.demoLink}
          imgSrc={projectData.imgSrc}
          codingLogos={projectData.codingLogos}
        />
      ))}
    </div>
  )
}

export default Projects
