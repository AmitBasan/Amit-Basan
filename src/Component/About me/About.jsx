import React from 'react'
import './about.css'
import ME from '../../Resources/S.png'
import {FaAward,FaUserGraduate} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h2>ABOUT ME</h2>
      <h5>Wanna Know me</h5>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about-me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
      
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
                <FaAward className='about_icon'></FaAward>
                <h5 Experience></h5>
                <small>2+ years of working</small>
            </article>
          
            
            <article className='about_card'>
              <VscProject className='about_icon'/>
                <h5 Projects></h5>
                <small>20+ projects</small>
            </article>
            
            <article className='about_card'>
              <FaUserGraduate className='about_icon'/>
                <h5 Study></h5>
                <small>Master of Computer Science</small>
            </article>
            
            </div>
          
            <p>
              Hello It's me Amit Basan. I have a strong foundation in data analysis and a passion for driving data-driven solutions, thanks to my master
of computer science (machine learning and big data) degree from the University of Wollongong. I have also
completed multiple certifications in data analytics from LinkedIn, which have enhanced my skills and knowledge
in this field. I am seeking a challenging role where I can apply my analytical skills and work collaboratively with
cross-functional teams to deliver data-driven solutions.

            </p>
            <a href='#contact' classname='btn btn-primary'>Lets chat</a>
           
            
        </div>
      </div>
    </section>
  )
}

export default About