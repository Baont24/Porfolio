import React from 'react'
import './porfolio.css'
import UDC from '../../assets/comingsoon.jpg'

const data = [
  {
    id: 1,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },

  {
    id: 2,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },

  {
    id: 3,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },

  {
    id: 4,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },

  {
    id: 5,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },

  {
    id: 6,
    image: UDC,
    title: 'This is porfolio item tilte',
    github: 'https://github.com',
    demo: 'https://.com'
  },
]

const porfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container porfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='porfolio_items'>
              <div className='porfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='porfolio_item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default porfolio