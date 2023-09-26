import React from "react";

function WorkExperience({ company, jobTitle, date, description, points }) {
  return (
    <div className="flex mb-8">
      {/* Left Side: Company Logo */}
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-md mr-4">
        {/* Insert your company logo image here */}
        <img
          src="company-logo.png"
          alt={`${company} Logo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Job Details */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{company}</h2>
        <p className="text-gray-600">{jobTitle}</p>
        <p className="text-gray-600">{date}</p>

        <div className="mt-4">
          <p className="text-gray-700">{description}</p>
          <ul className="list-disc list-inside mt-2">
            {points.map((point, index) => (
              <li key={index} className="text-gray-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
