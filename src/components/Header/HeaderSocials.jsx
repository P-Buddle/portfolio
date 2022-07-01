import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <AiOutlineUser className='about__icon'/>
        <AiFillLinkedin className='about__icon'/>

    </div>
  )
}

export default HeaderSocials