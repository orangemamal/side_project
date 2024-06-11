import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ onPageRender }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main/checkout');
  };

  useEffect(() => {
    onPageRender();
  }, [onPageRender]);

  const tableHeader = [
    {
      id: "thumbnail",
      name: '이미지',
    },
    {
      id: "name",
      name: '상품',
    },
    {
      id: "price",
      name: '가격',
    },
    {
      id: "quantity",
      name: '갯수',
    },
    {
      id: "total",
      name: '합계',
    },
    {
      id: "remove",
      name: '삭제',
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

  const minusQuantity = (item) => {
    --item.quantity
  }
  const plusQuantity = (item) => {
    ++item.quantity
    console.log(++item.quantity)
  }

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">

              <table className="table">
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
                            <button onClick={() => minusQuantity(product)} className="btn btn-outline-black decrease" type="button">
                              <i className="fa-solid fa-circle-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount table_input"
                            defaultValue={product.quantity}
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          />
                          <div className="input-group-append">
                            <button onClick={() => plusQuantity(product)} className="btn btn-outline-black increase" type="button">
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

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block">Update Cart</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="couponInput">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="couponInput" placeholder="Coupon Code"/>
              </div>
              <div className="col-md-4">
                <button className="btn btn-black">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">$230.00</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">$230.00</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-black btn-lg py-3 btn-block"
                            onClick={handleClick}>Proceed To Checkout
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
