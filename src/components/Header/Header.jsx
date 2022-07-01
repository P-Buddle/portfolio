import React from 'react'
import './header.css'
import CTA from '../CTA'
import ME from '../../Assets/troll.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h3>Hello I'm</h3>
            <h1 className='header__title'>Paul Buddle</h1>
            <h3 className='text-light'>I am a Junior Developer and currently looking for a job</h3>
            <CTA />
            

            <a href='#contact' className='scroll__down'>Scroll Down</a>

            
        </div>

    </header>
  )
}

export default Header