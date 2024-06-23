import React from 'react'
import{IoLogoLinkedin} from 'react-icons/io'
import {BsFacebook,BsGithub} from 'react-icons/bs'

const Header_Social = () => {
  return (
    
    <div className='header_socials' >
        <a href='https:/linkedin.com/in/Amit-Basan' target='_blank'><IoLogoLinkedin/>
        </a>
        <a href='https:/facebook.com/AmitBasan'target='_blank'><BsFacebook/>
        </a>
        <a href='https://github.com/AmitBasan'target='_blank'><BsGithub/>
        </a>

    </div>
  )
}

export default Header_Social