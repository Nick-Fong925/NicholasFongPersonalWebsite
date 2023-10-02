import { useState, useEffect } from "react";
import NicholasFongResume from "../assets/Resume/Nicholas_Fong_Resume.pdf";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Add scroll event listener
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="md:hidden fixed top-0 right-0 w-full">
        {/* Mobile Header */}
        <div className="text-white py-2 px-4 flex items-center justify-between">
          <div></div>
          <div>
            <button onClick={handleToggle} className="text-2xl focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${isOpen ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div
          className={`bg-gray-100 opacity-80 rounded-lg fixed top-12 right-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="p-4">
            <li>
              <a
              href="#about-section"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("about");
                const aboutSection = document.getElementById("about-section");
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="block px-4 py-2 mb-2 rounded-lg font-bold text-black text-s"
            >
              About
            </a>
            </li>
            <li>
              <a
                href="#work-experience-section"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("experience");
                  const aboutSection = document.getElementById("work-experience-section");
                  aboutSection.scrollIntoView({ behavior: "smooth" });

                }}
                className="block px-4 py-2 mb-2 rounded-lg font-bold text-black text-s"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("projects"); 
                  const aboutSection = document.getElementById("projects-section");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-4 py-2 mb-2 rounded-lg font-bold text-black text-s"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("contact");
                  const aboutSection = document.getElementById("contact-section");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-4 py-2 mb-2 rounded-lg font-bold text-black text-s"
              >
                Contact
              </a>
            </li>
            <li>
            <a href={NicholasFongResume} download="Nicholas_Fong_Resume.pdf">
                <li className="block px-4 mb-2 py-2 border-2  border-violet-800 rounded-lg font-bold cursor-pointer">
                  Resume
                </li>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
