import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (name === "") {
      setNameError("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (message === "") {
      setMessageError("Message is required.");
      valid = false;
    } else {
      setMessageError("");
    }

    if (valid) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_m43gmew",
          "template_tw4kah9",
          templateParams,
          "dx3VanLfrUMiH-9Sn"
        )
        .then((response) => {
          console.log("Email sent successfully!", response.text);

          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <div className=" flex items-center justify-center mt-10">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-violet-600">
          Contact Me
        </h1>
        <h2 className="text-black text-base md:text-xs mt-4">
          Please feel free to contact me anytime. I am open to collaborating on projects, answering any questions you may have, or simply having a conversation about technology and development. Your ideas and inquiries are always welcome.
        </h2>
        <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3 text-base border-b-2 w-full focus:outline-none border-black py-1 text-gray-800 placeholder-gray-500 "
              placeholder="Name"
              required
            />
            <span className="text-red-500">{nameError}</span>
          </div>

          {/* Email input */}
          <div className="flex flex-col ">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 text-base border-b-2 w-full focus:outline-none border-black py-1 text-gray-800 placeholder-gray-500 "
              placeholder="Email"
              required
            />
            <span className="text-red-500">{emailError}</span>
          </div>

          {/* Message input */}
          <div className="flex flex-col">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-3 mb-3 text-base border-b-2 w-full focus:outline-none border-black py-2 text-gray-800 placeholder-gray-500"
              rows={1}
              placeholder="Message"
              required
            />
            <span className="text-red-500">{messageError}</span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="font-bold px-6 py-1 text-black rounded-lg border-2 border-blue-950 hover:text-black transition duration-300"
          >
            Get Connected!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
