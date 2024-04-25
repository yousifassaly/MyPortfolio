import "./aboutme.css"
import ME from "../../assets/me-about.jpg"
import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";



export default function About () {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Delectus beatae sunt nisi animi esse accusamus inventore! 
                            Beatae veritatis aut autem porro doloremque optio, repellendus ad quas nostrum ullam libero pariatur.
                        </p>

                            <a href="#Contact" className="btn btn-primary">Let's Connect</a>
                    </div>

            </div>

        </section>
    )
}