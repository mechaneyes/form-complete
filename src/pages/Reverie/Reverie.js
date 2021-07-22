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
    <main className="main">
      <section className="hero">
        <h1>Whirligrid: Reverie, 2021</h1>
        <p className="mob mob--disclaimer">
          Images are rotated 90° for mobile. Visit on desktop for landscape.
        </p>

        <hr />

        <p className="info">
          Zuzana Licko's Whirligig font, laid out and <br />manipulated via
          Processing.
        </p>
        {/* <p className="info info--nomob">
          An SVG of the font character is resized, rotated and placed randomly
          on a grid. Colors from a defined palette are applied and adjusted with
          random transparencies. A PDF is saved then processed further in
          Illustrator and finally edited in LightRoom.
        </p> */}
        <p className="info">Prints available soon.</p>
        <p className="info">
          <a href="https://www.instagram.com/mechaneyes/">@mechaneyes</a>
        </p>

        <hr />
      </section>

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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
          />
          <img
            alt="Reverie - Awareness Beyond Thought - 0.7.0"
            src={
              process.env.PUBLIC_URL +
              "/img/beyond/Reverie-AwarenessBeyondThought-0.7.0.jpg"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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
            media="(max-width: 500px)"
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

      {/* <!-- ————————————————————————————————————o Reverie - VV Blue --> */}
      {/* <!-- ————————————————————————————————————o --> */}
      <h2 style={{ marginBottom: 30 }}>LVvLV</h2>
      <picture>
        <source
          srcSet={
            process.env.PUBLIC_URL + "/img/90_Reverie-Awareness-0.6.0.jpg"
          }
          media="(max-width: 500px)"
        />
        <img
          alt="Reverie - VV Blue - 0.1.0"
          src={process.env.PUBLIC_URL + "/img/Reverie-Awareness-0.6.0.jpg"}
          style={{ marginBottom: 0 }}
        />
      </picture>
    </main>
  );
};

export default Whirl;
