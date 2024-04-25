import "./nav.css"
import { IoHome } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa6";
import { SiOpenproject } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import { useState } from "react";


export default function Nav () {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><IoHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><FaUserAstronaut /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><SiOpenproject /></a>
            <a href="#contact" onClick={() => setActiveNav('#Contact')} className={activeNav === "#Contact" ? 'active' : ''}><GrContact /></a>
        </nav>
    )
}