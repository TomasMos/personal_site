import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/test.png'
import IMG2 from '../../assets/tictactoe.PNG'
import IMG3 from '../../assets/minesweeper-img.PNG'
import IMG4 from '../../assets/vitally.PNG'
import IMG5 from '../../assets/dashboard32.png'
import IMG6 from '../../assets/ft.PNG'





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Crossword - Optimization</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/TomasMos/crossword' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://youtu.be/OVXpdnSaUB0' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>TicTacToe - Minimax Search</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/TomasMos/tictactoe' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://www.youtube.com/watch?v=RFJReH6IRgg' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Minesweeper - Knowledge</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/TomasMos/minesweeper' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://youtu.be/by9tYxgwpsQ' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Vitally - Product</h3>
          <div className='portfolio__item-cta'>
            <a href='https://vitallyza.bubbleapps.io/version-test' className='btn' target='_blank' rel="noreferrer">Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>SparkleCV - Product</h3>
          <div className='portfolio__item-cta'>
            <a href='https://sparkle3.bubbleapps.io/version-test/' className='btn' target='_blank' rel="noreferrer">Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Friartuck - Product</h3>
          <div className='portfolio__item-cta'>
            <a href='https://friartuck.info/' className='btn' target='_blank' rel="noreferrer">Site</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio