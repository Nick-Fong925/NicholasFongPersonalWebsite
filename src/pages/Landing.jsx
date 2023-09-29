import { useEffect, useState } from "react";
import WorkExperience from "../components/CAPWorkExperience";
import BinggraeWorkExperience from "../components/BinggraeWorkExperience";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Info from "../components/Info";
import NicholasFongResume from "../assets/Resume/Nicholas_Fong_Resume.pdf";



function Landing() {
  const [activeSection, setActiveSection] = useState("about");


  // Function to handle scroll and update active section
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Define the positions of your sections
    const aboutMeSection = document.getElementById("about-section");
    const workExperienceSection = document.getElementById("work-experience-section");
    const projectsSection = document.getElementById("projects-section");
    const contactSection = document.getElementById("contact-section");

    const sectionOffsets = {
      about: aboutMeSection.offsetTop,
      experience: workExperienceSection.offsetTop,
      projects: projectsSection.offsetTop,
      contact: contactSection.offsetTop,
    };

    // Determine the active section based on scroll position
    let newActiveSection = "about";
    for (const section in sectionOffsets) {
      if (scrollY >= sectionOffsets[section]) {
        newActiveSection = section;
      }
    }

    setActiveSection(newActiveSection);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-row max-w-screen-lg justify-center">
        {/* Sidebar */}
        <div className="w-30 h-screen fixed top-0 left-0 overflow-y-auto mt-20">
          <ul className="p-4">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("about");
                  document.getElementById("about-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`block px-4 py-2 mb-2 rounded-lg font-bold ${
                  activeSection === "about"
                    ? "bg-violet-800 text-white"
                    : "hover:bg-violet-800 hover:text-white"
                }`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("experience");
                  document.getElementById("work-experience-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`block px-4 py-2 mb-2 rounded-lg font-bold ${
                  activeSection === "experience"
                    ? "bg-violet-800 text-white"
                    : "hover:bg-violet-800 hover:text-white"
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("projects");
                  document.getElementById("projects-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`block px-4 py-2 mb-2 rounded-lg font-bold ${
                  activeSection === "projects"
                    ? "bg-violet-800 text-white"
                    : "hover:bg-violet-800 hover:text-white"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("contact");
                  document.getElementById("contact-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`block px-4 py-2 mb-2 rounded-lg font-bold ${
                  activeSection === "contact"
                    ? "bg-violet-800 text-white font-bold"
                    : "hover:bg-violet-800 hover:text-white"
                }`}
              >
                Contact
              </a>
            </li>
            <a href={NicholasFongResume} download="Nicholas_Fong_Resume.pdf">
            <li className="block px-4 mb-2 py-2 border-4  border-violet-800 rounded-lg font-bold cursor-pointer">
              Resume
            </li>
          </a>
          </ul>
        </div>
        <div className="ml-40 p-4">
          <div id="about-section">
            <Info />
          </div>
          <div id="work-experience-section">
            <BinggraeWorkExperience/>
            <WorkExperience/>
          </div>
          <div id="projects-section">
            <Projects />
          </div>
          <div id="contact-section">
            <Contact />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Landing;
