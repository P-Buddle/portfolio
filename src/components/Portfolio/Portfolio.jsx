import './portfolio.css'
import img1 from '../../images/collisions.jpg'
import img2 from '../../images/helloworld.jpg'
import img3 from '../../images/ambgen.jpg'
import img4 from '../../images/camcom.jpg'
import img5 from '../../images/cs50finalproj.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">

      <h5>Check out some of my projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

       <div className='portfolio__item'>
        <h1>NPC Forge</h1>
        <h5>CS50x Course Final project, created using Python, Flask, and SQL</h5>
        <a href='https://p-buddle.github.io/hello-world-react/?fbclid=IwAR1KtVZ9Ig_fjbtIsoi_FW65rTyeCfsNYguko6u3bnZ_y41UT89cBA59Z4M' target="_blank">
          <img className='portfolio__item-image' src={img5} alt="link to hello-world app"/>
        </a>
        <h5>A dynamic web application and SQL database, used to create and store NPC data for DnD style roleplaying games.</h5>
        
       </div>
      

       
      <div className='portfolio__item'>
        <h1>Ambgen</h1>
        <h5>A fun ambient sound web app built in React</h5>
        <a href='https://p-buddle.github.io/amb-gen/#shapes' target="_blank">
          <img className='portfolio__item-image' src={img3} alt="link to ambgen app"/>
        </a>
        <h5>An experiment with more dynamic CSS design and interactive sound features.</h5>
        
      </div>
      

      
      <div className='portfolio__item'>
        <h1>Campaign</h1>
        <h5>A Dungeons & Dragons Campaign Compendium website built in React</h5>
        <a href='https://p-buddle.github.io/dnd-campaign/'target="_blank">
          <img className='portfolio__item-image' src={img4} alt="link to dnd compendium web app"/>
        </a>
        <h5>A project to help manage, maintain and display the vast amounts of lore used in a custom Dungeons and Dragons Campaign.</h5>
        
      </div>
      
        
      
      
      <div className='portfolio__item'>
        <h1>Collisions</h1>
        <h5>An interactive sound art piece made with Python</h5>
        <a href='https://www.youtube.com/watch?v=prIZ-BxhF-U' target="_blank">
          <img className='portfolio__item-image' src={img1} alt="link to video of collisions app"/>
        </a>
        <h5>Created as an experimental sound piece, I used pygame to create a visual component as well as an interactive element.</h5>
      </div>
      
    </div>
    
    </section>

  )
}

export default Portfolio