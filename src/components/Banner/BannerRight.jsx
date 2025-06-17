import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../../assets/banner.jpg";

const BannerRight = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-[80%] ml-[45px]">
      <Slider {...settings}>
        <div>
          <a href="#">
            <img src={banner} className="w-full cursor-pointer" alt="#Banner img" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={banner} className="w-full cursor-pointer" alt="#Banner img" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={banner} className="w-full cursor-pointer" alt="#Banner img" />
          </a>
        </div>
      </Slider>
    </section>
  );
};

export default BannerRight;
