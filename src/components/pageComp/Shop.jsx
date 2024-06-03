import React from 'react';

export default function Shop() {

  const itemsProduct = [
    {
      id: 1,
      productName: "프리미엄 침대형의자",
      price: 50000,
    },
    {
      id: 2,
      productName: "프리미엄 소파형의자",
      price: 100000,
    },
    {
      id: 3,
      productName: "프리미엄 회전의자",
      price: 80000,
    },
    {
      id: 1,
      productName: "프리미엄 침대형의자",
      price: 30000,
    },
    {
      id: 2,
      productName: "프리미엄 소파형의자",
      price: 50000,
    },
    {
      id: 3,
      productName: "프리미엄 회전의자",
      price: 120000,
    },
    {
      id: 1,
      productName: "프리미엄 소파형의자",
      price: 70000,
    },
    {
      id: 2,
      productName: "프리미엄 회전의자",
      price: 80000,
    },
  ];

  return (
    <main>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                <a className="product-item" href="#">
                  <img src={require(`assets/images/product-${item.id}.png`)} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{item.productName}</h3>
                  <strong className="product-price">{item.price.toLocaleString()}원</strong>
                  <span className="icon-cross">
                    <img src={require("assets/icons/cross.svg").default} className="img-fluid" />
                  </span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
};
