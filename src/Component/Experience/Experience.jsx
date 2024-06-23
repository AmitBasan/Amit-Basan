import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2> MY SKILLS</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
            <h4><BsPatchCheckFill/>  HTML</h4>
              <small className='text-light'>Experienced</small>
              
            </article>
           
            <article className='experience_detail'>
            <h4><BsPatchCheckFill/>CSS</h4>
              <small className='text-light'>Experienced</small>
              
            </article>
            <article className='experience_detail'>
              
              <h4><BsPatchCheckFill/> JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              
            </article>
            
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
             
              <h4> <BsPatchCheckFill/> Python</h4>
              <small className='text-light'>Experienced</small>
              
            </article>
            <article className='experience_detail'>
             
              <h4><BsPatchCheckFill/> MySQL</h4>
              <small className='text-light'>Experienced</small>
              
            </article>
            <article className='experience_detail'>
              
              <h4><BsPatchCheckFill/> MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              
            </article>
            
            
          </div>
        </div>
        <div className='experience_datascience'>
          <h3>Data Science </h3>
          <div className='experience_content'>
            <article className='experience_detail'>
              
              <h4><BsPatchCheckFill/> Excel</h4>
              <small className='text-light'>Intermediate</small>
              
            </article>
            <article className='experience_detail'>
              
              <h4><BsPatchCheckFill/> PowerBI</h4>
              <small className='text-light'>Beginner</small>
              
            </article>
            <article className='experience_detail'>
              
              <h4><BsPatchCheckFill/>Tableau</h4>
              <small className='text-light'>Intermediate</small>
              
            </article>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience