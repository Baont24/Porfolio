import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/comingsoon.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Name Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo vitae omnis autem aut minima. Impedit perferendis tempore, rem odit ab magnam minus animi deserunt consectetur sequi reprehenderit praesentium placeat!'
  },

  {
    avatar: AVTR1,
    name: 'Name Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo vitae omnis autem aut minima. Impedit perferendis tempore, rem odit ab magnam minus animi deserunt consectetur sequi reprehenderit praesentium placeat!'
  },

  {
    avatar: AVTR1,
    name: 'Name Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo vitae omnis autem aut minima. Impedit perferendis tempore, rem odit ab magnam minus animi deserunt consectetur sequi reprehenderit praesentium placeat!'
  },

  {
    avatar: AVTR1,
    name: 'Name Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo vitae omnis autem aut minima. Impedit perferendis tempore, rem odit ab magnam minus animi deserunt consectetur sequi reprehenderit praesentium placeat!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
              modules={[ Pagination ]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials