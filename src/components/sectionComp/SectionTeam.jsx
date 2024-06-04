import React from 'react';

const Team = () => {

  const ourTeam = [
    {
      no: 1,
      name: '소지섭',
      position: '팀장',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 2,
      name: '고창석',
      position: '실장',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 3,
      name: '박해일',
      position: '본부장',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      no: 4,
      name: '손예진',
      position: 'CEO',
      introduction: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
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
            <img src={require(`assets/images/person_${item.no}.jpg`)} className="img-fluid mb-5" />
            <h3>
              <a href="#">{item.name}</a>
            </h3>
            <span className="d-block position mb-4">{item.position}</span>
            <p>{item.introduction}</p>
            <p className="see_more mb-0">
              <a href="#" className="more dark">
                <div>자세히 보기</div>
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