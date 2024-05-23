import React from 'react';
import Slider from "react-slick";

export default function Slick() {

  let slickValue = [
    {
      portrait: "person_1",
      review: "프리미엄 침대형 의자는 제 생활에 큰 변화를 가져다주었습니다. 매일 긴 업무 시간을 마치고 집에 돌아오면, 이 의자에 몸을 맡기는 순간 모든 피로가 풀리는 느낌이에요. 특히나 의자의 부드러운 쿠션과 넓은 등받이는 마치 호텔 침대에 누워있는 듯한 편안함을 제공합니다. 디자인도 세련되어 거실에 두었을 때 고급스러움이 배가됩니다. 손님들이 올 때마다 꼭 어디서 샀냐고 물어보곤 하죠. 정말 최고의 제품입니다.",
      name: "저스틴 비버",
      buyDate: "2024년 4월 10일",
      likePoint: "★★★★☆",
    },
    {
      portrait: "person_2",
      review: "프리미엄 소파형 의자를 구매한 지 6개월이 지났지만, 여전히 처음 구매했을 때와 같은 만족감을 느끼고 있습니다. 고급스러운 가죽 소재와 튼튼한 구조는 오랜 시간 사용해도 변함없는 퀄리티를 자랑합니다. 무엇보다도, 장시간 앉아 있어도 허리와 다리에 전혀 무리가 가지 않아 TV를 보거나 책을 읽는 시간이 더욱 즐거워졌습니다. 디자인도 너무 예뻐서 집안 분위기를 한층 더 품격 있게 만들어주네요.",
      name: "에드 쉬런",
      buyDate: "2024년 3월 25일",
      likePoint: "★★★★★",
    },
    {
      portrait: "person_3",
      review: "프리미엄 회전의자를 구매한 이후로는 업무 효율이 정말 많이 올랐습니다. 부드러운 회전 기능 덕분에 책상 주위를 자유롭게 이동할 수 있어 너무 편리합니다. 또한, 의자의 쿠션감과 인체공학적인 디자인 덕분에 오래 앉아 있어도 허리와 목이 전혀 아프지 않습니다. 사무실에 앉아 있는 시간이 많은 저에게는 정말 구세주 같은 제품입니다. 스타일리시한 디자인은 덤이죠. 주변 동료들에게도 추천하고 싶습니다.",
      name: "방탄소년단",
      buyDate: "2024년 6월 5일",
      likePoint: "★★★★☆",
    },
    {
      portrait: "person_4",
      review: "최근에 프리미엄 침대형 의자를 구매했는데, 그 선택이 정말 현명했다고 생각합니다. 주말에 책을 읽거나 낮잠을 잘 때, 이 의자에 누워 있으면 마치 안락한 침대에 있는 것처럼 편안합니다. 또한, 조절 가능한 등받이와 다리 받침대 덕분에 나만의 최적의 자세를 찾을 수 있습니다. 친척들이 집에 올 때마다 아이들까지 이 의자에서 내려오질 않네요. 가족 모두가 좋아하는 제품입니다. 품질도 뛰어나고 정말 추천합니다",
      name: "테일러 스위프트",
      buyDate: "2024년 7월 15일",
      likePoint: "★★★★★",
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {slickValue.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              className="item"
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">

                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>{item.review}</p>
                    </blockquote>

                    <div className="author-info">
                      <div className="author-pic">
                        <img src={require(`assets/images/${item.portrait}.jpg`)} alt="Maria Jones" className="img-fluid" />
                      </div>
                      <h3 className="font-weight-bold">{item.name}</h3>
                      <span className="additional_info position d-block mb-3">
                        <span>{item.buyDate}</span>
                        <span className="like_point">{item.likePoint}</span>
                      </span>
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
