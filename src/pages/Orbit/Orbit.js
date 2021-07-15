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
    <div className="carousel rothko">
      <div className="gig-header">
        <h1>Out of Orbit, 2021</h1>
        <p className="mob-disclaimer">
          These images are rotated 90° for mobile viewing, but they're meant to
          be hung in portrait orientations.
        </p>
        <p className="mob-disclaimer">
          Visit this page using a bigger monitor to see them as intended.
        </p>
        <h3 className="contact-addy">
          <a href="https://www.instagram.com/mechaneyes/">@mechaneyes</a>
        </h3>
      </div>

      <hr />
      
      {/* <!-- ————————————————————————————————————o Out of Orbit - Drone Logic --> */}
      <h2 id="drone-logic">Drone Logic</h2>
      <Slider {...slickSettings}>
        <img
          src={process.env.PUBLIC_URL + "/img/orbit/Lone-Swordsman-0.2.1.jpeg"}
          alt="Out of Orbit - Drone Logic - 1.2.1"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/orbit/Lone-Swordsman-0.3.4.jpeg"}
          alt="Out of Orbit - Drone Logic - 1.3.4"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/orbit/Lone-Swordsman-0.4.1.jpeg"}
          alt="Out of Orbit - Drone Logic - 1.4.1"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/orbit/Lone-Swordsman-0.5.0.jpeg"}
          alt="Out of Orbit - Drone Logic - 1.5.0"
        />
      </Slider>

      {/* <!-- ————————————————————————————————————o Out of Orbit - Divided Flash --> */}
      <h2>Divided Flash</h2>
      <Slider {...slickSettings}>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.1.0.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.1.0"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.1.5.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.1.5"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.2.2.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.2.2"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.3.0.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.3.0"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.3.1.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.3.1"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/orbit/⣎⡇ꉺლ༽இ•̛)ྀ◞ ༎ຶ ༽ৣৢ؞ৢ؞ؖ ꉺლ—a-0.4.1.jpeg"
          }
          alt="Out of Orbit - Divided Flash - 0.4.1"
        />
      </Slider>
    </div>
  );
};

export default Whirl;
