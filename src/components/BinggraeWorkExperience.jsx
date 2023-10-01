import BinggraeLogo from "../assets/Worklogo/binggraelogo.png";



function CAPWorkExperience() {

  return (
    <div className="py-5 l6">
      <div className="container py-10 mx-auto px-4 md:flex flex-row items-center rounded-xl bg-gray-100">
        <div className="flex flex-col items-center md:w-1/3 justify-center md:mr-10">
          <img src={BinggraeLogo} alt="temp" className="w-48 h-auto rounded-lg object-fit" />
          <p className="mt-5 text-black text-xs font-semibold">June-2023 - Present</p>
          <p className="sm:mb-10 m:mb-0 mt-2 text-black text-xs font-semibold">Vancouver, B.C</p>

        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-5 text-violet-800">Binggrae</h2>
          <p className="text-black text-m font-bold">Full Stack Software Developer Intern</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Contributed to the creation of an e-commerce platform tailored to cater to the young adult age demographic while
showcasing and marketing frozen goods to a potential customer base exceeding 700,000</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Created and deployed a MongoDB cloud database, to keep track of newsletter sign-ups and subscriber data for a
digital marketing campaign, implementing data encryption to safeguard sensitive user information</p>
          <p className="text-black text-xs mt-2 font-semibold"> {`>`} Implemented over 20 components using React, leveraging design systems and UI libraries to enhance consistency,
code re-usability, and streamline the development process</p>


        </div>
      </div>
    </div>
  );
}

export default CAPWorkExperience;
