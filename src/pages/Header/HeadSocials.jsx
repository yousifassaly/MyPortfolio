import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export const HeadSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/" target='_blank'><CiLinkedin /></a>
        <a href="https://github.com/" target='_blank'><FaGithub /></a>
    </div>
  )
}
