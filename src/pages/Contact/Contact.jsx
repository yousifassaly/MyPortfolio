import"./contact.css"
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      
       emailjs.sendForm('service_xpako73', 'template_yph8lhs', form.current, {publicKey: 'FPvHE5ZY3vPZ0jaoP'})
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2 className="contact_title">Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineMail className="contact_option_icon"/>
                        <h4>Email</h4>
                        <h5>alassalyyousif@gmail.com</h5>
                        <a href="mailto:alassalyyousif@gmail.com" target="_blank"> Send a message</a>
                    </article>

                    <article className="contact_option">
                        <FaLinkedin className="contact_option_icon"/>
                        <h4>LinkedIn</h4>
                        <h5>Yousif Assaly</h5>
                        <a href="https://www.linkedin.com/in/yousif-assaly-79b3041ba/" target="_blank">Let's Connect</a>
                    </article>

                    <article className="contact_option">
                        <SiWhatsapp className="contact_option_icon"/>
                        <h4>Whats Up</h4>
                        <h5>Phone Number</h5>
                        <a href="https://api.whatsapp.com/send?phone+16023392017" target="_blank">Call Me</a>
                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="Name" placeholder="Your Full Name" required/>
                    <input type="text" name="Email"  placeholder="Your Email" required />
                    <input type="text" name="Subject" placeholder="Subject" required/>
                    <textarea name="Message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="Submit" className="btn btn-primary">Send Message</button>
                </form>

                </div>
        </section>
    )
}