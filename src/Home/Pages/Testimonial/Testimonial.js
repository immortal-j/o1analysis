import React, { useState } from "react";
import "./Testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Doe John",
      title: "Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.ibb.co/87yHLmb/3.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      title: "Owner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.ibb.co/y5ppgbX/4.jpg"
    },
    {
      id: 3,
      name: "Doe Boe",
      title: "Director",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.ibb.co/nrxy049/6.jpg"
    },
    {
      id: 4,
      name: "Doe Boe",
      title: "Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.ibb.co/fDz2c3Q/21.jpg"
    }
  ];

  let swiperElement;

  const [activeSlide, setactiveSlide] = useState(0);

  const changeSlide = (newSlide) => {
    setactiveSlide(newSlide);
  };

  function goToPage(numberPage) {
    console.log("goto", numberPage);
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideTo(numberPage, 1000, false);
  }

  return (
    <section>
    
      <div className="testimonials-carousel-wrap">
        <div
          className="listing-carousel-button listing-carousel-button-next"
          onClick={() => goToPage(activeSlide + 1)}
        >
          <i className="fa fa-caret-right" style={{ color: "#fff" }}></i>
        </div>
        <div
          className="listing-carousel-button listing-carousel-button-prev"
          onClick={() => goToPage(activeSlide - 1)}
        >
          <i className="fa fa-caret-left" style={{ color: "#fff" }}></i>
        </div>
        <div className="testimonials-carousel">
          {/* <div className="swiper-container">
            <div className="swiper-wrapper"> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={
              window.innerWidth < 768 ? 1 : window.innerWidth < 998 ? 2 : 3
            }
            onSlideChange={(swiper) => changeSlide(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperElement = swiper)}
            pagination={{
              el: ".tc-pagination",
              type: "bullets"
            }}
          >
            {data.map((testimonial) => (
              <SwiperSlide className="swiper-slide" key={testimonial.id}>
                {" "}
                <div className="testi-item">
                  {/* <div className="testi-avatar">
                    <img src={testimonial.image} />
                  </div> */}
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="#" className="text-link"></a>
                    <div className="testimonials-avatar">
                      <h3>John Doe</h3>
                      <h4>Owner</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* </div>
          </div> */}
          </Swiper>
        </div>

        <div className="tc-pagination"></div>
      </div>
    </section>
  );
}
