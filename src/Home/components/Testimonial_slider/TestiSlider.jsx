import React, {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../Testimonial/Testimonial.css";

const Testimonial_position = {
  // position: "absolute",
  // top: " 320vh",
};

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
        slidesToScroll: 1,
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

function goToPage(numberPage) {
  console.log("goto", numberPage);
  const swiper = document.querySelector(".swiper-container").swiper;
  swiper.slideTo(numberPage, 1000, false);
}
const Testislider = () => {
  const [activeSlide, setactiveSlide] = useState(0);

  const changeSlide = (newSlide) => {
    setactiveSlide(newSlide);
  };
  let swiperElement;
  function next() {
    this.slider.slickNext();
  }
  return (
    <div>
      <section style={Testimonial_position}>
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
          {/* <div
          className="listing-carousel-button listing-carousel-button-next"
      onClick={()=>this.previous} 
        >
          <i className="fa fa-caret-right" style={{ color: "#fff" }}  ></i>
        </div>
        <div
          className="listing-carousel-button listing-carousel-button-prev"
          onClick={() => goToPage(activeSlide - 1)}
        >
          <i className="fa fa-caret-left" style={{ color: "#fff" }}></i>
        </div> */}
          <div className="testimonials-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper"></div>

              <Slider {...settings}>
                {data.map((testimonial) => (
                  <SwiperSlide className="swiper-slide" key={testimonial.id}>
                    {" "}
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
              </Slider>
            </div>
            <div className="tc-pagination"></div>
          </div>
        </div>
        <h3 style={{ color: "white",textAlign:"center",marginTop:"-3rem"}}>{`<-Slide->`}</h3>
      </section>
    </div>
  );
};

export default Testislider;
