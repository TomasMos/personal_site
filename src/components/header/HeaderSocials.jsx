import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/tomas-moschides-00429812a/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/TomasMos' target="_blank" rel="noreferrer"><FaGithub /></a>        
    </div>

  )
}

export default HeaderSocials