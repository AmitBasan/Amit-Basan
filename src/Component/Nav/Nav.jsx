import React, { useState,activeNav } from 'react'
import  './nav.css'
import {FcHome,FcContacts,FcAbout,FcServices} from 'react-icons/fc'
import {RiContactsLine} from 'react-icons/ri'
import {SiAboutdotme} from 'react-icons/si'
import{GoProject,GoDatabase} from 'react-icons/go'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      <a href='#' onClick={() =>setActiveNav('#')} className={activeNav ==='#' ? 'active':''}><FcHome/> </a>
      <a href='#about' onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><SiAboutdotme/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience') } className={activeNav === '#experience' ? 'active':''}><GoDatabase/></a>
      <a href='#Projects' onClick={()=>setActiveNav('#Projects') } className={activeNav === '#Projects' ? 'active':''}><GoProject/></a>
      <a href='#contact'  onClick={()=>setActiveNav('#contact') } className={activeNav === '#contact' ? 'active':''}><RiContactsLine/></a>
    </nav>
  )
}

export default Nav