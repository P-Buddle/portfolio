import React from 'react'
import CV from '../Assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'> 
        <a href={CV} download className='btn'>Download CV</a>
        <a href="mailto:paul-buddle@hotmail.co.uk" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA