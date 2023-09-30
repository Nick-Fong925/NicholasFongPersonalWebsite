import Project from "./Project";
import BiteBook from "../assets/ProjectImages/BiteBook.png";
import CAP from "../assets/ProjectImages/CAP.png";
import DailyBoost from "../assets/ProjectImages/DailyBoost.png";

function Projects() {
  const ProjectData = [
    {
      title: "BiteBook",
      description:
        "BiteBook seeks to help businesses that struggle with marketing by providing a platform for foodies, families, and friends to share restaurants and build a community around local eateries. The inspiration for BiteBook is the oldest form of marketing - word of mouth, instead of those restaurant names or pictures being lost in the family group chat, find them all in one place, BiteBook!",
      githubLink: "https://github.com/Nick-Fong925/BiteBook",
      demoLink: "",
      imgSrc: BiteBook,
      codingNames: ["React.js", "Tailwind.js", "Express.js", "MongoDB"], // Updated to an array of coding names
    },
    {
      title: "Daily Boost",
      description:
        "Daily Boost is an innovative mobile app designed to motivate individuals to embrace an active and healthy lifestyle by leveraging the power of social media and community building. In today's fast-paced world, finding the motivation to exercise regularly can be challenging. Daily Boost aims to change that by creating a supportive and engaging environment for fitness enthusiasts and beginners alike",
      githubLink: "https://github.com/myung03/produHacks",
      imgSrc: DailyBoost,
      demoLink: "",
      codingNames: ["React.js", "Tailwind.js", "Express.js", "MongoDB"], // Updated to an array of coding names
    },
    {
      title: "CAP Website",
      description:
        "The Campus Ambassador Program Website is a dynamic online platform designed to serve as an effective marketing tool for showcasing campus events and highlighting club members. This website aims to create a vibrant online presence for campus activities, fostering engagement and participation among students.",
      githubLink: "https://github.com/Nick-Fong925/CAPWeb",
      imgSrc: CAP,
      demoLink: "https://nick-fong925.github.io/CAPWeb/",
      codingNames: ["React.js", "Tailwind.js"], // Updated to an array of coding names
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
          codingNames={projectData.codingNames} // Pass the coding names as a prop
        />
      ))}
    </div>
  );
}

export default Projects;
