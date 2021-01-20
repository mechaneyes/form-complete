import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Whirl = () => {
  let slickSettings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel">
      <h1>Reverie 2021.01</h1>
      {/* <!-- ————————————————————————————————————o Reverie - Vibes from the Tribe --> */}
      <h2>Vibes from the Tribe</h2>
      <Slider {...slickSettings}>
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.1.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.1.0"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.2.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.2.0"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.3.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.3.0"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.4.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.4.0"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.5.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.5.0"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/img/Reverie-VibesFromTheTribe-0.6.0.png"
          }
          alt="Reverie - Vibes from the Tribe - 0.6.0"
        />
      </Slider>
      {/* <!-- ————————————————————————————————————o Reverie - Louie V Luther V --> */}
      <h2>Luther V vs Louie V</h2>
      <Slider {...slickSettings}>
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.1.0.png"}
          alt="Reverie - Louie V Luther V - 0.1.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.2.1.png"}
          alt="Reverie - Louie V Luther V - 0.2.1"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.3.0.png"}
          alt="Reverie - Louie V Luther V - 0.3.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.4.0.png"}
          alt="Reverie - Louie V Luther V - 0.4.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.5.0.png"}
          alt="Reverie - Louie V Luther V - 0.5.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.6.0.png"}
          alt="Reverie - Louie V Luther V - 0.6.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.7.0.png"}
          alt="Reverie - Louie V Luther V - 0.7.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-LouieVLutherV-0.1.0.png"}
          alt="Reverie - Louie V Luther V - 0.1.0"
        />
      </Slider>
      {/* <!-- ————————————————————————————————————o Reverie - Mystical Dance --> */}
      <h2>Mystical Dance</h2>
      <Slider {...slickSettings}>
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.1.0.png"}
          alt="Reverie - Mystical Dance - 1.1.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.2.0.png"}
          alt="Reverie - Mystical Dance - 1.2.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.3.0.png"}
          alt="Reverie - Mystical Dance - 1.3.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.4.0.png"}
          alt="Reverie - Mystical Dance - 1.4.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.5.0.png"}
          alt="Reverie - Mystical Dance - 1.5.0"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/Reverie-MysticalDance-1.6.0.png"}
          alt="Reverie - Mystical Dance - 1.6.0"
        />
      </Slider>
    </div>
  );
};

export default Whirl;
