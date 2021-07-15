import React from "react";

import Slider from "react-slick";
// import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

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
      <h1>Reverie, 2021</h1>
      <p className="mob-disclaimer">
        These images are rotated 90° for mobile viewing, but they're meant to be
        hung in landscape orientations.
      </p>
      <p className="mob-disclaimer">
        Visit this page using a bigger monitor to see them as intended.
      </p>

      <hr />

      {/* <!-- ————————————————————————————————————o Reverie - State of Awareness --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>State of Awareness</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.1.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.1.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.1.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.2.1.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.2.1"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.2.1.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.3.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.3.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.3.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.4.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.4.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.4.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.5.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.5.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.5.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.6.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.6.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.6.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/awareness/90_Reverie-StateOfAwareness-0.7.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - State of Awareness - 0.7.0"
            src={
              process.env.PUBLIC_URL +
              "/img/awareness/Reverie-StateOfAwareness-0.7.0.jpg"
            }
          />
        </picture>
      </Slider>

      {/* <!-- ————————————————————————————————————o Reverie - Awareness Beyond Thought --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>Awareness Beyond Thought</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.2.1.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.2.1"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.2.1.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.3.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.3.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.3.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.3.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.4.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.4.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.5.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.5.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.5.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.6.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.6.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.6.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.7.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.7.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.7.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/beyond/90_Reverie-AwarenessBeyondThought-0.1.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.1.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.1.0.jpg"
            }
          />
        </picture>
      </Slider>

      {/* <!-- ————————————————————————————————————o Reverie - Simply Sitting Silently --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>Simply Sitting Silently</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/sitting/90_Reverie-SimplySittingSilently-1.0.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Simply Sitting Silently - 1.0.0"
            src={
              process.env.PUBLIC_URL +
              "/img/sitting/Reverie-SimplySittingSilently-1.0.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/sitting/90_Reverie-SimplySittingSilently-1.2.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Simply Sitting Silently - 1.2.0"
            src={
              process.env.PUBLIC_URL +
              "/img/sitting/Reverie-SimplySittingSilently-1.2.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/sitting/90_Reverie-SimplySittingSilently-1.5.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Simply Sitting Silently - 1.5.0"
            src={
              process.env.PUBLIC_URL +
              "/img/sitting/Reverie-SimplySittingSilently-1.5.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/sitting/90_Reverie-SimplySittingSilently-1.6.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Simply Sitting Silently - 1.6.0"
            src={
              process.env.PUBLIC_URL +
              "/img/sitting/Reverie-SimplySittingSilently-1.6.0.jpg"
            }
          />
        </picture>
      </Slider>

      {/* <!-- ————————————————————————————————————o Reverie - And Thus Embrace a Sacred Mystery --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>And Thus Embrace a Sacred Mystery</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.1.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.1.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.1.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.2.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.2.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.2.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.3.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.3.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.3.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.4.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.4.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.4.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.5.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.5.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.5.0.jpg"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/embrace/90_Reverie-AndThusEmbraceASacredMystery-0.6.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - And Thus Embrace a Sacred Mystery - 0.6.0"
            src={
              process.env.PUBLIC_URL +
              "/img/embrace/Reverie-AndThusEmbraceASacredMystery-0.6.0.jpg"
            }
          />
        </picture>
      </Slider>

      {/* <!-- ————————————————————————————————————o Reverie - Vibes from the Tribe --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>Vibes from the Tribe</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vibes/90_Reverie-VibesFromTheTribe-0.6.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Vibes from the Tribe - 0.6.0"
            src={
              process.env.PUBLIC_URL +
              "/img/vibes/Reverie-VibesFromTheTribe-0.6.0.png"
            }
          />
        </picture>
      </Slider>

      {/* <!-- ————————————————————————————————————o Reverie - VV Blue --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>LVvLV</h2>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL + "/img/90_Reverie-Awareness-0.6.0.jpg"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - VV Blue - 0.1.0"
            src={process.env.PUBLIC_URL + "/img/Reverie-Awareness-0.6.0.jpg"}
            style={{marginBottom: 150}}
          />
        </picture>

      {/* <!-- ————————————————————————————————————o Reverie - Louie V Luther V --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2>Luther V vs Louie V</h2>
      <Slider {...slickSettings}>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.1.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.1.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.1.0.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.2.1.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.2.1"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.2.1.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.3.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.3.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.3.0.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.4.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.4.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.4.0.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.5.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.5.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.5.0.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.6.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.6.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.6.0.png"
            }
          />
        </picture>
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/img/vv/90_Reverie-LouieVLutherV-0.7.0.png"
            }
            media="(max-width: 767px)"
          />
          <img
            alt="Reverie - Louie V Luther V - 0.7.0"
            src={
              process.env.PUBLIC_URL + "/img/vv/Reverie-LouieVLutherV-0.7.0.png"
            }
          />
        </picture>
      </Slider>
    </div>
  );
};

export default Whirl;
