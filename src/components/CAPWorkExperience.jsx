import CAPLogo from "../assets/Worklogo/CAP Logo.jpg";

function CAPWorkExperience() {

  return (
    <div className="py-5 l6">
      <div className="container py-10 mx-auto px-4 md:flex flex-row items-center rounded-xl bg-gray-100">
        <div className="flex flex-col items-center md:w-1/3 justify-center md:mr-10">
          <img src={CAPLogo} alt="temp" className="w-32 h-32 rounded-lg object-fit" />
          <p className="mt-5 text-black text-xs font-semibold">May-2023 - Present</p>
          <p className="mt-2 text-black text-xs font-semibold">Vancouver, B.C</p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-5 text-violet-800">UBC Campus Ambassador Program</h2>
          <p className="text-black text-m font-bold">Student Director of Technology</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Led UI design team by modeling and implementing high-fidelity mock-ups, using prototyping tools, and
collaborating with cross-functional teams to deliver intuitive and visually appealing user interfaces</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Designed and implemented various features on the website including Stripe payment processing to ensure secure
transactions and a contact system to schedule presentations and communicate with students</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Conducted regular maintenance and updates on the website to ensure optimal functionality, security, and user
experience</p>
          <div className="flex space-x-4 mt-5 items-center">
   
          </div>

        </div>
      </div>
    </div>
  );
}

export default CAPWorkExperience;
