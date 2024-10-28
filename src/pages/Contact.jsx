import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "b18046d6-4d76-412b-8d82-65c344662f7f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center h-[100vh] dark:text-white dark:bg-[#2f2f2f]">
      <div className="w-[50%] h-full flex flex-col items-center justify-center gap-10">
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <div className="ml-64">
          <h3 className="text-4xl">Let's form an alliance.</h3>
          <p className="text-justify mt-2">
            I'm always open to new connections and collaborations; feel free to
            reach out via email or connect with me on LinkedIn or Twitter.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <MdEmail className="text-4xl" />
            <p>lubyuvraj@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <BiLogoWhatsapp className="text-4xl" />
            <p>+91-7542860461</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="bg-gray-300 p-10 w-[400px] rounded-md">
          <form onSubmit={onSubmit}>
            <label htmlFor="name" className="text-black font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded-md mt-2 text-black outline-none bg-transparent border-2 border-black"
              required
            />
            <label htmlFor="email" className="text-black font-semibold">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md mt-2 text-black outline-none bg-transparent border-2 border-black"
              required
            />
            <label htmlFor="message" className="text-black font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 w-full min-h-[150px] rounded-md bg-transparent outline-none border-2 border-black text-black resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 rounded-md p-2 font-bold mt-4"
            >
              Submit Message
            </button>
          </form>
          {result && <p className="mt-4 text-black font-semibold">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
