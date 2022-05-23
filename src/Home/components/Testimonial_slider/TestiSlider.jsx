import React, {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Testimonial.css";
import './arrows.css';

const settings = {
  arrows: true, 
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
    className: 'react__slick__slider__parent',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const data = [
  {
    id: 1,
    name: "Doe John",
    title: "Designer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/87yHLmb/3.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Owner",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/y5ppgbX/4.jpg",
  },
  {
    id: 3,
    name: "Doe Boe",
    title: "Director",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/nrxy049/6.jpg",
  },
  {
    id: 4,
    name: "Doe Boe",
    title: "Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/fDz2c3Q/21.jpg",
  },
  {
    id: 5,
    name: "Doe Boe",
    title: "Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/fDz2c3Q/21.jpg",
  },
  {
    id: 6,
    name: "Doe Boe",
    title: "Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://i.ibb.co/fDz2c3Q/21.jpg",
  },
];


const Testislider = () => {



  return (
    <div>
      <section >
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <span className="section-separator"></span>
            <p>
            We believe in simplicity. Learning can be very simple if you have the right approach. 
            </p>
          </div>
        </div>
        <div className="testimonials-carousel-wrap">
    
          <div className="testimonials-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper"></div>

              <Slider {...settings}>
                {data.map((testimonial) => (
                  <SwiperSlide className="swiper-slide" key={testimonial.id}>
                  
                    <div className="testi-item">
                      <div className="testi-avatar">
                        <img src={testimonial.image} />
                      </div>
                      <div className="testimonials-text-before">
                        <i className="fa fa-quote-right"></i>
                      </div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                        {testimonial.description}
                        </p>
                        <a href="#" className="text-link"></a>
                        <div className="testimonials-avatar">
                          <h3>{testimonial.name}</h3>
                          <h4>{testimonial.title}</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after">
                        <i className="fa fa-quote-left"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>     </div>
            <div className="tc-pagination"></div>
          </div>
        </div>
    
      </section>
    </div>
  );
};

export default Testislider;
