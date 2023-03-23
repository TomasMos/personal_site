import React from 'react'
import './about.css'
import ME from '../../assets/Tom-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiTiedScroll} from 'react-icons/gi'
import {GoTelescope} from 'react-icons/go'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years in startups</small>
            </article>
            <article className='about__card'>
              <GiTiedScroll className='about__icon'/>
              <h5>Education</h5>
              <small>BEng Mechanical, 1st</small>
            </article>
            <article className='about__card'>
              <GoTelescope className='about__icon'/>
              <h5>Range</h5>
              <small>Product to Data Science</small>
            </article>
          </div>

          <p>
            I'm a competent developer with a strong analytical foundation as I graduated first in class for Mechanical Engineering at Stellenbosch University (First-Class Honours) in South Africa. I'm also an experienced product owner, having created multiple products from ideation to go-to-market. 
          </p>
          <p>
            My experience covers product development, software development, sales, marketing, process improvement, startups, financial analysis, and data science. I am skilled in Python, Django, data science (pandas, numpy, tensorflow, SQL), frontend development, and product management. 
          </p>

          <a href='#contact' className='btn btn-primary'>Get in Touch</a>

        </div>

        
      </div>
    </section>
  )
}

export default About