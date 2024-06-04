import React from 'react';

const SectionWhyChoose = () => {

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
  ]

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="section-title">고객이 저희를 선택하는 이유</h2>
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
  );
};

export default SectionWhyChoose;