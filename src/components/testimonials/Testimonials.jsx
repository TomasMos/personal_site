import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>


        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client_name'>Earnest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias assumenda pariatur distinctio ipsum recusandae, maxime id facere officiis sint ratione fugit repudiandae, qui, aut dignissimos aliquam doloribus aspernatur deserunt sed?
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client_name'>Earnest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias assumenda pariatur distinctio ipsum recusandae, maxime id facere officiis sint ratione fugit repudiandae, qui, aut dignissimos aliquam doloribus aspernatur deserunt sed?
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client_name'>Earnest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias assumenda pariatur distinctio ipsum recusandae, maxime id facere officiis sint ratione fugit repudiandae, qui, aut dignissimos aliquam doloribus aspernatur deserunt sed?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials