import React from 'react';

const SectionProduct = () => {

    const itemsProduct = [
        {no: 1, product: '프리미엄 침대형의자', price: 80000},
        {no: 2, product: '프리미엄 소파형의자', price: 100000},
        {no: 3, product: '프리미엄 회전의자', price: 40000},
    ];
    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    return (
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
    );
};

export default SectionProduct;