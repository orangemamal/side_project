import React from 'react';
import Slick from "../Slick";

export default function About() {

  const servicesItems = [
    {
      keyword: 'truck',
      title: 'Fast & Free Shipping',
    },
    {
      keyword: 'bag',
      title: 'Easy to Shop',
    },
    {
      keyword: 'support',
      title: '24/7 Support',
    },
    {
      keyword: 'return',
      title: 'Hassle Free Returns',
    },
  ];

  const ourTeam = [
    {
      no: 1,
      name: 'Lawson Arnold',
      position: 'CEO, Founder, Atty.',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 2,
      name: 'Lawson Arnold',
      position: 'CEO, Founder, Atty.',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 3,
      name: 'Lawson Arnold',
      position: 'CEO, Founder, Atty.',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 4,
      name: 'Lawson Arnold',
      position: 'CEO, Founder, Atty.',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
  ];

  return (
    <main>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                dolor tempor tristique.
              </p>

              <div className="row my-5">

                {servicesItems.map((item, index) => (
                  <div className="col-6 col-md-6" key={index}>
                    <div className="feature">
                      <div className="icon">
                        <img src={require(`assets/icons/${item.keyword}.svg`)} alt="Image" className="imf-fluid" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={require("assets/images/why-choose-us-img.jpg")} alt="Image" className="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">

            {ourTeam.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
                <img src={require(`assets/images/person_${item.no}.jpg`)} className="img-fluid mb-5" />
                <h3><a href="#">{item.name}</a></h3>
                <span className="d-block position mb-4">{item.position}</span>
                <p>{item.introduction}</p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More
                    <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div className="testimonial-slider">

                  <Slick />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};
