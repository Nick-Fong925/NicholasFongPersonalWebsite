import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Info from "../components/Info";
import Projects from "../components/Projects";
function Landing() {

  return (
    <>
    <div className="bg-gray-100">
    <Header/>
    <Info/>
    <WorkExperience />
    <Projects/>
    <Contact />
    </div>
    </>
  );
}

export default Landing;
