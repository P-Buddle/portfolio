import React from 'react'
import './about.css'
import {AiOutlineUser} from 'react-icons/ai'

const About = () => {
  return (
    <section className='about__section' id="about">
      
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__content'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at tempore accusamus facere voluptatibus quis deserunt consectetur, nulla dignissimos. Praesentium minus fugit consectetur quidem deleniti id excepturi eveniet autem doloribus.
          </p>
          <p>and more and more</p>
        </div>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </section>

  )
}

export default About