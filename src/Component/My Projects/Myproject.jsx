import React from 'react'
import './myproject.css'
import IMG1 from '../../Resources/project1.jpg'
import IMG3 from '../../Resources/Project2.jpg'
import IMG2 from '../../Resources/tableau.png'


const Myproject = () => {
  return (
    <section id='Projects'>
      <h5>My Recent Work</h5>
      <h2> MY PROJECTS</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          
          <div className='portfolio_item-image'>
            <img src={IMG1} alt=""></img>
          </div>
            <h3> Project on Python</h3>
            <div className="portfolio__item-cta">

             
              <a href='https://www.kaggle.com/code/amitbasan/notebook6d814048f2' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>

          
        </article>

        <article className='portfolio_item'>
          
          <div className='portfolio_item-image'>
            <img src={IMG2} alt=""></img>
          </div>
            <h3> Project on Tableau</h3>
            <div className="portfolio__item-cta">
            
              
              <a href='https://public.tableau.com/app/profile/amit.basan/viz/roadaccident_16609876810230/Dashboard1?publish=yes' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
            


          
        </article>
        <article className='portfolio_item'>
          
          <div className='portfolio_item-image'>
            <img src={IMG3} alt=""></img>
          </div>
            <h3> Project on PowerBI</h3>
            <div className="portfolio__item-cta">
           
              <a href='https://app.powerbi.com/view?r=eyJrIjoiNTU0MTJhYTktYTljZS00YWQ0LThhYzMtYzFlOTNmYzBhMzcwIiwidCI6IjJmMGUwNjM3LWYyNDUtNGM0My05NGRiLTc3MTI0ZWMwNzgxYyJ9' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>


          
        </article>
      </div>
    </section>
  )
}

export default Myproject