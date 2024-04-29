import "./aboutme.css"
import ME from "../../assets/me55.jpg"
import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";



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
                                <RiHtml5Line className="about_ icon" />
                                <h5>HTML5</h5>
                                <small>Front End</small>
                            </article>
                            
                            <article className="about_card">
                                <IoLogoCss3 className="about_ icon" />
                                <h5>CSS</h5>
                                <small>Front End</small>
                            </article>

                            <article className="about_card">
                                <TbBrandJavascript className="about_ icon" />
                                <h5>JavaScript</h5>
                                <small>Front End</small>
                            </article>

                            <article className="about_card">
                                <FaReact className="about_ icon" />
                                <h5>React</h5>
                                <small>Front End</small>
                            </article>
                            


                        </div>

                        <p>
                        Hello! I'm Yousif, an aspiring software developer with a passion for building and exploring new technologies.
                        Currently, I am honing my skills in HTML,CSS, React, JavaScript, Node.js, And still improving for more!
                        and I am eager to apply my knowledge in practical projects. I thrive on challenge and continuous learning,
                        and I am always on the lookout for opportunities to innovate and enhance my abilities.
                        My goal is to develop software solutions that are not only effective but also user-friendly and impactful. 
                        Whether working on individual projects or collaborating in teams,
                        I bring a detail-oriented and problem-solving approach to ensure we achieve the best outcomes. Let's connect and create something amazing together!
                        </p>

                            <a href="#Contact" className="btn btn-primary">Let's Connect</a>
                    </div>

            </div>

        </section>
    )
}