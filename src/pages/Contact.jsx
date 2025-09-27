import React, { useState } from "react";
import contactImg from "/src/assets/images/aboutPage.png";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const [pop, setpop] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name_from.value.trim();
    const email = e.target.email_from.value.trim();
    const message = e.target.textarea.value.trim();

    // Validation: check for empty inputs
    if (!name || !email || !message) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_fm49qg7",
        "template_sb2yi5q",
        e.target,
        "pYJbyra4-KT2s4cOV"
      )
      .then(() => {
        e.target.reset();
        setpop(true);
      });
  };

  return (
    <section id="contact" className="h-screen bg-black text-white bg-[radial-gradient(circle_at_left,rgba(0,128,0,0.5),transparent_25%)]">
      <div className="max-w-4xl h-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image / Illustration */}
        <div data-aos="fade-up" className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact illustration"
            className="w-64 md:w-80 animate-float"
          />
        </div>

        {/* Right Side - Compact Contact Form */}
        <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg">
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-green-400 mb-4"
          >
            Contact
          </h1>

          <form className="space-y-4" onSubmit={sendEmail}>
            {/* Name */}
            <div data-aos="fade-up">
              <input
                required
                name="name_from"
                id="name"
                type="text"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-400 outline-none transition-all text-sm"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div data-aos="fade-up">
              <input
                required
                name="email_from"
                id="email"
                type="email"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-400 outline-none transition-all text-sm"
                placeholder="Your Email"
              />
            </div>

            {/* Message */}
            <div data-aos="fade-up">
              <textarea
                required
                id="textarea"
                name="textarea"
                rows="4"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-green-400 outline-none transition-all text-sm resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {pop && (
        <div
          data-aos="fade-right"
          className="fixed top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-3 text-sm"
        >
          <p>Email successfully sent!</p>
          <button
            onClick={() => setpop(false)}
            className="ml-2 bg-black/30 px-2 py-1 rounded hover:bg-black/50 transition-all"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
