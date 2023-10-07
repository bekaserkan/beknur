import React from "react";
import "./Advertising.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../img/react 1.jpg";
import img2 from "../../img/react 2.jpg";
import img3 from "../../img/react 3.webp";
import img4 from "../../img/react 4.webp";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Advertising = () => {
  const [div, setDiv] = useState(true);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return div ? (
    <div className="advertising">
      <h1>Реклама</h1>
      <GrClose onClick={() => setDiv(false)} size={30} className="close" />
      <div className="wrapper">
        <Slider {...settings} className="slide_advert">
          <div>
            <div className="box">
              <img src={img1} />
              <div className="save">
                <a href="https://www.youtube.com/watch?v=FLt2TveqHQM">
                  Перейти на сайт
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="box">
              <img src={img2} />
              <div className="save">
                <a href="https://www.youtube.com/watch?v=_shA5Xwe8_4">
                  {" "}
                  Перейти на сайт{" "}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="box">
              <img src={img3} />
              <div className="save">
                <a href="https://www.youtube.com/watch?v=zQnBQ4tB3ZA">
                  {" "}
                  Перейти на сайт{" "}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="box">
              <img src={img4} />
              <div className="save">
                <a href="https://www.youtube.com/watch?v=Zx9k4R4g5rs">
                  {" "}
                  Перейти на сайт{" "}
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  ) : null;
};

export default Advertising;
