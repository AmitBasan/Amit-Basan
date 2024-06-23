import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Resources/1080_66313358-ff0f-450d-8270-c1c35694d8e7.jpg'
import Header_Social  from './Header_Social'

const Header = () => {
  return (
   <header>
        <div className="header_container">
            <h3>Hi it's</h3>
            <h1>AMIT BASAN</h1>
            <h2 className="text-light"> Data Analyst </h2>
            <CTA/>
            <Header_Social/>
            <div className="me">
                <img src={ME} alt="me">
            
                </img>
            </div>
           
        </div>
   </header>
  )
}

export default Header