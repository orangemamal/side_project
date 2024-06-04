import React from 'react';

const SectionBlog = () => {

  const blogItems = [
    {no: 1, title: 'FurNi의 홈 데코 팁과 트렌드', author: '아리아나 그란데', update: '2024년 5월 12일'},
    {no: 2, title: 'FurNi 가구로 완성하는 스타일리시한 집', author: '비욘세', update: '2024년 5월 24일'},
    {no: 3, title: 'FurNi의 최신 가구 리뷰 및 추천', author: '브루노 마스', update: '2024년 5월 27일'},
  ]

  return (
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
  );
};

export default SectionBlog;