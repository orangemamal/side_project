import React, {useEffect, useState} from 'react';
import SectionProduct from "../sectionComp/SectionProduct";
import SectionTestimonial from "../sectionComp/SectionTestimonial";

export default function Services() {

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

  const [firstScrollEvent, setFirstScrollEvent] = useState(false);
  const [secondScrollEvent, setSecondScrollEvent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      console.log(currentScrollY)

      if (currentScrollY > 300) {
        setFirstScrollEvent(true)
      } else {
        setFirstScrollEvent(false)
      }

      if(currentScrollY > 700) {
        setSecondScrollEvent(true)
      } else {
        setSecondScrollEvent(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <main>
      <div className={`mb40 why-choose-section animate__animated_scroll service ${firstScrollEvent ? 'backInLeft' : ''}`}>
        <div className="container">
          <div className="row my-5">

            {servicesItems.map((item, index) => (
              <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
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
      </div>

      <div className={`product-section pt-0 animate__animated_scroll ${secondScrollEvent ? 'fadeInRight' : ''}`}>
        <SectionProduct />
      </div>

      <div className="testimonial-section">
        <SectionTestimonial />
      </div>

    </main>
  );
};
