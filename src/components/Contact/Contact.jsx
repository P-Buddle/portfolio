import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Meee</h2>

      <div className='contact__container container'>
        
          <div className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>paul-buddle@hotmail.co.uk</h5>
            <a href='mailto:paul-buddle@hotmail.co.uk'><h4>Send a message</h4></a>
          </div>


      </div>
    </section>
  )
}

export default Contact