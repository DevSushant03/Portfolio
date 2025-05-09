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
        setpop(true)
      });
  };

  return (
    <section id="contact" className="contact-sectionn-body centered">
      <div className="contact-section  centered">
        <div data-aos="fade-up" className="links centered-vertical">
          <img src={contactImg} alt="img" />
        </div>
        <div className="form-container">
          <h1 data-aos="fade-up">CONTACT</h1>
          <form className="form" onSubmit={sendEmail}>
            <div data-aos="fade-up" className="form-group">
              <label for="email"> Name</label>
              <input required name="name_from" id="name" type="text" />
              <label for="email"> Email</label>
              <input required name="email_from" id="email" type="text" />
            </div>
            <div data-aos="fade-up" className="form-group">
              <label for="textarea">Your Message</label>
              <textarea
                required
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <button
             
              type="submit"
              className="form-submit-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {pop && (
        <div  data-aos="fade-right" class="toast">
          <p class="toast-content">Email successfully sent!</p>
          <button  onClick={()=>setpop(false)}>X</button>
        </div>
      )}
    </section>
  );
};
