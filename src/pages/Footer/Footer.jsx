import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
    return (
        <Footer> 
            <a href="#" className="footer_logo">Yousif</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#projects">Recent Projects</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

            <div className="Social_media">
                <a href="https://www.instagram.com/yousif.assaly/"><FaInstagram /> Instagram</a>
                <a href="https://twitter.com/YousifMclearn"><FaXTwitter /> Twitter</a>
                <a href="https://www.linkedin.com/in/yousif-assaly-79b3041ba/"><AiOutlineLinkedin /> Linkedin</a>
                <a href="https://github.com/yousifassaly"><FaGithub /> GitHub</a>
            </div>

            <div className="footer_copyright">
                <small>Yousif Assaly. All rights reserved. <FaRegCopyright /></small>
            </div>
        </Footer>
    )
}