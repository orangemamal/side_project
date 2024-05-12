import React from 'react';
import Slider from "react-slick";

export default function Slick() {

  let portraits = ["person-1", "person-1", "person-1", "person-1"];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {portraits.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              className="item"
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">

                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                        malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                        tristique.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas.
                        Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                    </blockquote>

                    <div className="author-info">
                      <div className="author-pic">
                        <img src={require(`assets/images/${el}.png`)} alt="Maria Jones" className="img-fluid" />
                      </div>
                      <h3 className="font-weight-bold">Maria Jones</h3>
                      <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
