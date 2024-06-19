import React from 'react';

const Team = () => {

  const ourTeam = [
    {
      no: 1,
      name: '소지섭',
      position: '제품 디자이너',
      introduction: '안녕하세요, 저는 소지섭입니다. 5년 경력의 가구 디자이너로, 심플하면서도 기능적인 디자인을 추구하고 있습니다. 친환경 소재를 사용해 지속 가능한 가구를 만드는 데 관심이 많습니다. 고객에게 편안함과 아름다움을 제공하는 가구를 만들기 위해 노력하겠습니다.',
    },
    {
      no: 2,
      name: '고창석',
      position: '마케팅 매니저',
      introduction: '안녕하세요, 저는 고창석입니다. 7년 경력의 마케팅 매니저로, 시장 조사와 디지털 마케팅을 통해 우리 회사의 가구를 더 많은 사람들에게 알리고 있습니다. 고객과의 소통을 강화하며, 최적의 마케팅 전략을 개발하는 것이 제 목표입니다.',
    },
    {
      no: 3,
      name: '박해일',
      position: '생산 관리자',
      introduction: '안녕하세요, 저는 박해일입니다. 10년 경력의 생산 관리자입니다. 생산 공정의 효율성을 높이고 품질 관리를 담당하며, 고품질 가구를 안정적으로 생산하는 데 기여하고 있습니다. 최고의 제품을 제공하기 위해 항상 현장에서 최선을 다하고 있습니다.',
    },
    {
      no: 4,
      name: '손예진',
      position: '고객 서비스 담당자',
      introduction: '안녕하세요, 저는 손예진입니다. 6년 경력의 고객 서비스 담당자로, 고객 문의에 친절하고 신속하게 응대하며 불만 사항을 해결하는 역할을 맡고 있습니다. 고객의 만족을 최우선으로 생각하며, 더 나은 서비스 제공을 위해 노력하겠습니다.',
    },
  ];

  return (
    <div className="container">

      <div className="row mb-5">
        <div className="col-lg-5 mx-auto text-center">
          <h2 className="section-title">팀원 소개</h2>
        </div>
      </div>

      <div className="row">

        {ourTeam.map((item, index) => (
          <div className="frame col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
            <div>
              <img src={require(`assets/images/person_${item.no}.jpg`)} className="img-fluid mb-5" />
              <h3>
                <a href="#">{item.name}</a>
              </h3>
              <span className="d-block position mb-4">{item.position}</span>
              <p className="introduction">{item.introduction}</p>
            </div>

            <p className="see_more mb-0">
              <a href="#" className="more dark">
                <span>자세히 보기</span>
                <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Team;