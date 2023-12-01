import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss'

export default function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="carousel">
      <div className="wrap">
        <a>
          <img src="/Images/carosel_3.png" alt="" />
        </a>
      </div>
      <div className="wrap">
        <a>
          <img src="/Images/carosel_4.png" alt="" />
        </a>
      </div>
      <div className="wrap">
        <a>
          <img src="/Images/carosel_5.png" alt="" />
        </a>
      </div>
      
    </Slider>
  );
}
