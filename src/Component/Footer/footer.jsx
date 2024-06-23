import React from 'react'
import {AiFillFacebook,AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>Amit</a>

    <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
    
    <div className='footer_socials'>
        <a href='https://fb.com/amitbasan'><AiFillFacebook/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://twitter.com'><AiFillTwitterSquare/></a>
    </div>


   </footer>
  )
}
export default Footer