import React from 'react';
import Slick from "../Slick";

export default function Blog() {

  const itemsProduct = [
    {
      itemNum: 1,
      thumbnailTitle: 'First Time Home Owner Ideas',
      owner: 'Kristin Watson',
      noticeDate: 'Dec 19, 2021',
    },
    {
      itemNum: 2,
      thumbnailTitle: 'How To Keep Your Furniture Clean',
      owner: 'Robert Fox',
      noticeDate: 'Dec 15, 2021',
    },
    {
      itemNum: 3,
      thumbnailTitle: 'Small Space Furniture Apartment Ideas',
      owner: 'Kristin Watson',
      noticeDate: 'Dec 12, 2021',
    },
  ];

  return (
    <main>
      <div className="blog-section">
        <div className="container">

          <div className="row">

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={require(`assets/images/post-${item.itemNum}.jpg`)} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3><a href="#">{item.thumbnailTitle}</a></h3>
                    <div className="meta">
                      <span>by <a href="#">{item.owner}</a></span> <span>on <a href="#">{item.noticeDate}</a></span>
                    </div>
                  </div>
                </div>
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
