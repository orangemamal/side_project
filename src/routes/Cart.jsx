import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ onPageRender }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Checkout');
  };

  useEffect(() => {
    onPageRender();
  }, [onPageRender]);

  const tableHeader = [
    {
      id: "thumbnail",
      name: '상품 이미지',
    },
    {
      id: "name",
      name: '상품 이름',
    },
    {
      id: "price",
      name: '상품 가격',
    },
    {
      id: "quantity",
      name: '수량',
    },
    {
      id: "total",
      name: '합계',
    },
    {
      id: "remove",
      name: '지우기',
    },
  ];

  const products = [
    {
      id: 1,
      name: '프리미엄 회전의자',
      price: 50000,
      quantity: 1,
      imageUrl: require('assets/images/product-1.png')
    },
    {
      id: 2,
      name: '프리미엄 침대형의자',
      price: 80000,
      quantity: 1,
      imageUrl: require('assets/images/product-2.png')
    }
  ];

  const [productQuantities, setProductQuantities] = useState(
      products.map(product => ({ id: product.id, quantity: product.quantity }))
  );

  const minusQuantity = (id) => {
    setProductQuantities(prevQuantities =>
        prevQuantities.map(product =>
            product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        )
    );
  };

  const plusQuantity = (id) => {
    setProductQuantities(prevQuantities =>
        prevQuantities.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
    );
  };

  const totalPayment = {
    beforeDiscount: 130000,
    afterDiscount: 130000,
  }


  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">

              <table className="table cart">
                <thead>
                  <tr>
                    {tableHeader.map((item, index) => (
                      <th key={index} className={`product-${item.id}`}>{item.name}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td className="product-thumbnail">
                        <img src={product.imageUrl} alt="Image" className="img-fluid" />
                      </td>

                      <td className="product-name">
                        <h2 className="h5 text-black">{product.name}</h2>
                      </td>

                      <td>{product.price.toLocaleString()}원</td>

                      <td className="quantity_group">
                        <div className="input-group mb-3 d-flex align-items-center quantity-container">

                          <div className="input-group-prepend">
                            <button onClick={() => minusQuantity(product.id)} className="btn btn-outline-black decrease" type="button">
                              <i className="fa-solid fa-circle-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount table_input"
                            value={
                                productQuantities.find(item => item.id === product.id)?.quantity || 0
                            }
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            readOnly
                          />
                          <div className="input-group-append">
                            <button onClick={() => plusQuantity(product.id)} className="btn btn-outline-black increase" type="button">
                              <i className="fa-solid fa-circle-plus"></i>
                            </button>
                          </div>

                        </div>
                      </td>

                      <td>{(product.price * product.quantity).toLocaleString()}원</td>

                      <td className="delete">
                        <i className="fa-solid fa-trash-can fa-lg"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </form>
        </div>

        <div className="row coupon_and_pay_wrap">
          <div className="col-md-6 coupon">
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="couponInput">쿠폰 적용</label>
                <p>가지고 계신 쿠폰 번호를 입력해주세요.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="couponInput" placeholder="Coupon Code"/>
              </div>
              <div className="col-md-4">
                <button className="coupon_btn btn btn-black">쿠폰 적용하기</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 pl-5 pay">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">합계</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">할인 전</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{totalPayment.beforeDiscount.toLocaleString()} 원</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">할인 후 합계</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{totalPayment.afterDiscount.toLocaleString()} 원</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block"
                      onClick={handleClick}>계산하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
