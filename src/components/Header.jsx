import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Show/hide the "About Us" dropdown

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    scrollToTop();
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to all links to scroll to the top
  const addScrollToTopEventListener = () => {
    const links = document.querySelectorAll("Link");

    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });
  };

  // Call the function when the component mounts
  useEffect(() => {
    addScrollToTopEventListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-20">
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-100 border-l border-gray-200 shadow-lg p-4 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="md:hidden text-black font-bold absolute top-4 right-4"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Menu Items */}
          <ul className="flex flex-col space-y-4 mt-10 text-center">
            <li>
              <Link
                to="/"
                className="text-black font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-black font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-black font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-black font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
