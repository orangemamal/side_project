import React from 'react';
import SectionProduct from "../sectionComp/SectionProduct";
import SectionTestimonial from "../sectionComp/SectionTestimonial";
import SectionBlog from "../sectionComp/SectionBlog";
import SectionWhyChoose from "../sectionComp/SectionWhyChoose";
import product1 from 'assets/images/product-1.png';
import product2 from 'assets/images/product-2.png';
import product3 from 'assets/images/product-3.png';

const Home = () => {

  const images = {
    1: product1,
    2: product2,
    3: product3,
  }

  const itemsSideProduct = [
    {no: 1, product: '프리미엄 침대형의자', productInfo: '최상의 편안함을 제공하는 완벽한 휴식 공간입니다.'},
    {no: 2, product: '프리미엄 소파형의자', productInfo: '고급스러운 디자인과 편안함을 겸비한 최고의 선택입니다.'},
    {no: 3, product: '프리미엄 회전의자', productInfo: '자유로운 움직임과 스타일리시한 편안함을 선사합니다.'},
  ]


  return (
    <main>
      <div className="product-section">
        <SectionProduct />
      </div>

      <div className="why-choose-section">
        <SectionWhyChoose />
      </div>

      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src={require("assets/images/img-grid-1.jpg")} alt="Untree.co" /></div>
                <div className="grid grid-2"><img src={require("assets/images/img-grid-2.jpg")} alt="Untree.co" /></div>
                <div className="grid grid-3"><img src={require("assets/images/img-grid-3.jpg")} alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                고객의 인테리어를 도와드립니다
              </h2>
              <p>
                세심한 전문가 상담과 맞춤형 디자인으로 최상의 인테리어를 제공합니다.<br/> 최신 트렌드와 고객의 취향을 반영하여 특별한 공간을 완성해 드립니다.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>전문가 상담</li>
                <li>맞춤형 디자인</li>
                <li>최신 트렌드</li>
                <li>특별한 공간</li>
              </ul>
              <p><a herf="#" className="btn">살펴보기</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-product">
        <div className="container">
          <div className="row">

            {itemsSideProduct.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src={images[item.no]}
                      className="img-fluid product-thumbnail"
                      alt={`Product ${item.no}`}
                    />
                  </div>
                  <div className="pt-3">
                    <h3>{item.product}</h3>
                    <p>{item.productInfo}</p>
                    <p className="read_more"><a href="#">자세히 보기</a></p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <SectionTestimonial />
      </div>

      <div className="blog-section">
        <SectionBlog />
      </div>

    </main>
  );
};

export default Home;