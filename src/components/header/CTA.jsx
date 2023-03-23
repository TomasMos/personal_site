import React from 'react'
import CV from '../../assets/Tomas Moschides Otta CV.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel="noreferrer" className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default CTA