import React from 'react';
import Slick from "../Slick";
import product1 from 'assets/images/product-1.png';
import product2 from 'assets/images/product-2.png';
import product3 from 'assets/images/product-3.png';

const Home = () => {

  const itemsProduct = [
    {no: 1, product: '프리미엄 침대형의자', price: 50000},
    {no: 2, product: '프리미엄 소파형의자', price: 50000},
    {no: 3, product: '프리미엄 회전의자', price: 50000},
  ];

  const images = {
    1: product1,
    2: product2,
    3: product3,
  };

  const blogItems = [
    {no: 1, title: 'FurNi의 홈 데코 팁과 트렌드', author: '아리아나 그란데', update: '2024년 5월 12일'},
    {no: 2, title: 'FurNi 가구로 완성하는 스타일리시한 집', author: '비욘세', update: '2024년 5월 24일'},
    {no: 3, title: 'FurNi의 최신 가구 리뷰 및 추천', author: '브루노 마스', update: '2024년 5월 27일'},
  ]

  const servicesItems = [
    {
      keyword: 'truck',
      title: '빠른 무료 배송',
      content: '저희는 그 어느 회사보다 빠른 배송을 보장드립니다.',
    },
    {
      keyword: 'bag',
      title: '쉬운 구매 방법',
      content: '저희는 매장에서 구매하는 것보다 쉽고 빠른 온라인 쇼핑을 제공합니다.',
    },
    {
      keyword: 'support',
      title: '365 서비스 지원',
      content: '저희는 365일 항상 고객 서비스 센터를 운영 중입니다.',
    },
    {
      keyword: 'return',
      title: '무료 반품 보장',
      content: '저희는 고객을 위해 언제든 무료 반품을 해드립니다.',
    },
  ];

  const itemsSideProduct = [
    {no: 1, product: '프리미엄 침대형의자', productInfo: '최상의 편안함을 제공하는 완벽한 휴식 공간입니다.'},
    {no: 2, product: '프리미엄 소파형의자', productInfo: '고급스러운 디자인과 편안함을 겸비한 최고의 선택입니다.'},
    {no: 3, product: '프리미엄 회전의자', productInfo: '자유로운 움직임과 스타일리시한 편안함을 선사합니다.'},
  ];

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <main>
      <div className="product-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">다양한 의자를<br/>만나보세요</h2>
              <p className="mb-4">
                트렌디함을 담은 감성,<br/>
                가구가 작품이 되는 공간
              </p>
              <p><a href="shop.html" className="btn btn-primary">살펴보기</a></p>
            </div>

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={index}>
                <a className="product-item" href="cart.html">
                  <img src={require(`assets/images/product-${item.no}.png`)} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{ item.product }</h3>
                  <strong className="product-price">{ formatNumber(item.price) }<span>원</span></strong>

                  <span className="icon-cross">
                    <img src={require("assets/icons/cross.svg").default} className="img-fluid" />
                  </span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>FurNi가 제공하는 다양한 서비스</p>

              <div className="row my-5">

                {servicesItems.map((item, index) => (
                  <div className="col-6 col-md-6" key={index}>
                    <div className="feature">
                      <div className="icon">
                        <img src={require(`assets/icons/${item.keyword}.svg`)} alt="Image" className="imf-fluid" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">고객 리뷰</h2>
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

      <div className="blog-section">
        <div className="container">
          <div className="row mb-5 section_title_wrap">
            <div className="col-md-6">
              <h2 className="section-title">FurNi's Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">자세히 보기</a>
            </div>
          </div>

          <div className="row">

            {blogItems.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={index}>
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={require(`assets/images/post-${item.no}.jpg`)} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>{item.title}</h3>
                    <div className="meta">
                      <span className="author">{item.author}</span>
                      <span className="update">{item.update}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;