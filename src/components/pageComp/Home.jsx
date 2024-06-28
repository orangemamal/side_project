import React, {useEffect, useState} from 'react';
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

  const [firstScrollEvent, setFirstScrollEvent] = useState(false);
  const [secondScrollEvent, setSecondScrollEvent] = useState(false);
  const [thirdScrollEvent, setThirdScrollEvent] = useState(false);
  const [fourthScrollEvent, setFourthScrollEvent] = useState(false);
  const [fifthScrollEvent, setFifthScrollEvent] = useState(false);
  const [sixthScrollEvent, setSixthScrollEvent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const browserWidth = window.innerWidth

      if (browserWidth > 768) {
        if (currentScrollY > 300) {
          setFirstScrollEvent(true)
        } else {
          setFirstScrollEvent(false)
        }

        if(currentScrollY > 800) {
          setSecondScrollEvent(true)
        } else {
          setSecondScrollEvent(false)
        }

        if(currentScrollY > 1400) {
          setThirdScrollEvent(true)
        } else {
          setThirdScrollEvent(false)
        }

        if(currentScrollY > 1900) {
          setFourthScrollEvent(true)
        } else {
          setFourthScrollEvent(false)
        }

        if(currentScrollY > 2400) {
          setFifthScrollEvent(true)
        } else {
          setFifthScrollEvent(false)
        }

        if(currentScrollY > 2900) {
          setSixthScrollEvent(true)
        } else {
          setSixthScrollEvent(false)
        }

      } else {
        if (currentScrollY > 300) {
          setFirstScrollEvent(true)
        } else {
          setFirstScrollEvent(false)
        }

        if(currentScrollY > 2100) {
          setSecondScrollEvent(true)
        } else {
          setSecondScrollEvent(false)
        }

        if(currentScrollY > 3400) {
          setThirdScrollEvent(true)
        } else {
          setThirdScrollEvent(false)
        }

        if(currentScrollY > 4000) {
          setFourthScrollEvent(true)
        } else {
          setFourthScrollEvent(false)
        }

        if(currentScrollY > 4500) {
          setFifthScrollEvent(true)
        } else {
          setFifthScrollEvent(false)
        }

        if(currentScrollY > 4900) {
          setSixthScrollEvent(true)
        } else {
          setSixthScrollEvent(false)
        }
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <main>
      <div className={`mb40 product-section animate__animated_scroll ${firstScrollEvent ? 'fadeInRight' : ''}`}>
        <SectionProduct />
      </div>

      <div className={`mb40 why-choose-section animate__animated_scroll ${secondScrollEvent ? 'fadeInLeft' : ''}`}>
        <SectionWhyChoose />
      </div>

      <div className={`mb40 we-help-section animate__animated_scroll ${thirdScrollEvent ? 'fadeInUp' : ''}`}>
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
              <p><a herf="/Shop" className="btn">살펴보기</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className={`mb40 popular-product animate__animated_scroll ${fourthScrollEvent ? 'backInLeft' : ''}`}>
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

      <div className={`mb40 testimonial-section animate__animated_scroll ${fifthScrollEvent ? 'fadeInRight' : ''}`}>
        <SectionTestimonial />
      </div>

      <div className={`mb40 blog-section animate__animated_scroll ${sixthScrollEvent ? 'backInLeft' : ''}`}>
        <SectionBlog />
      </div>

    </main>
  );
};

export default Home;