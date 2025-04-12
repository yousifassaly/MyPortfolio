import "./aboutme.css"
import ME from "../../assets/profileme.jpg"
import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";



export default function About () {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2 className="the_title">About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>
                    <div className="about_content">
                        <div className="about_cards">
                            
                            <article className="about_card">
                                <FaLaptopCode className="about_ icon" />
                                <h5>Coding</h5>
                                <small>HTML, CSS , JavaScript , React</small>
                            </article>

                            <article className="about_card">
                                <FaAws className="about_ icon" />
                                <h5>AWS Cloud</h5>
                                <small>AWS Cloud Practitioner Certification </small>
                            </article>
                            
                            <article className="about_card">
                                <MdOutlineSecurity className="about_ icon" />
                                <h5>CompTIA</h5>
                                <small>CompTIA Security+ Certification</small>
                            </article>


                            <article className="about_card">
                                <FaReact className="about_ icon" />
                                <h5>Python</h5>
                                <small>Coding And Automation</small>
                            </article>
                            


                        </div>

                        <p>
                        Hello! I’m Yousif, an aspiring cybersecurity professional with a solid foundation in both security and coding. Alongside my cybersecurity skills in network security, incident response, and cloud security,
                        I bring hands-on coding experience with HTML, CSS, JavaScript, React, and Python, which helps me understand and secure web applications more effectively. 
                        Through personal projects, home labs, and platforms like TryHackMe, I’ve worked with tools like Nmap, Wireshark, and Burp Suite to perform vulnerability assessments and web application security testing.
                        I’m passionate about continuous learning and enjoy tackling challenges that push me to grow. Whether it’s analyzing threats or understanding the code behind web technologies, I bring curiosity and a problem-solving mindset to every opportunity. 
                        I’m excited to keep improving and contribute to building safer digital environments. Let’s connect and learn together!
                        </p>

                            <a href="#Contact" className="btn btn-primary">Let's Connect</a>
                    </div>

            </div>

        </section>
    )
}