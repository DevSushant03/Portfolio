import React from "react";
import contactImg from "/src/assets/images/aboutPage.png";

export const Contact = () => {
  const handleFormSubmit = (formData)=>{

    console.log(formData);

  }
  return (
    <section id="contact" className="contact-sectionn-body centered">
      <div 
      className="contact-section  centered">
        <div data-aos="fade-up" className="links centered-vertical">
          <img src={contactImg} alt="img" />
        </div>
        <div className="form-container">
          <h1 data-aos="fade-up">CONTACT</h1>
          <form className="form" action={handleFormSubmit}>
            <div data-aos="fade-up" className="form-group">
            <label for="email"> Name</label>
            <input required="" name="name" id="name" type="text" />
              <label for="email"> Email</label>
              <input required="" name="email" id="email" type="text" />
            </div>
            <div data-aos="fade-up" className="form-group">
              <label for="textarea">Your Message</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
