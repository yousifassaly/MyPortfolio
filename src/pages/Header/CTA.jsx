import React from 'react'
import CV from '../../assets/Yousif-Assaly-IT support technician 2.0.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
    </div>
  )
}
