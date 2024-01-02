import "./Contact.css";




import React from "react";




const Contact = () => {
  

  return (
    <section className="contact section" id="contact">
     
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Reach out to me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          
          <div className="contact__info flex flex-row gap-4">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">akshatcoding2k22@gmail.com</span>

              <a href="mailto:akshatcoding2k22@gmail.com" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">College mail id</h3>
              <span className="contact__card-data">akshatt21@iitk.ac.in</span>

              <a href="mailto:akshatt21@iitk.ac.in" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin-square contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Akshat Tiwari</span>

              <a
                href="https://www.linkedin.com/in/akshat-tiwari-5a5617248/"
                className="contact__button"
              >
                Connect with me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
