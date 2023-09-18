// Library import

import { Col, Modal, Row } from "react-bootstrap";

// File Import
import CrossIcon from "@/assets/images/icon/cross-gray.png";
import { Thumb } from "@/component";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToCart, decreaseFromCart } from "@/store/features/productSlice";
import { useAppSelector } from "@/store/store";

export const ProductModal = ({ show, handleClose, product }: any) => {
  const carts = useAppSelector((state) => state.productReducer.value.carts);
  const dispatch = useDispatch();

  const findCartIndex = carts?.findIndex((item) => item.id === product?.id);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      animation={true}
      className="modal-wrapper"
      backdrop="static"
    >
      <div className="p-4">
        <div className="modal-common-content">
          <div className="product_details">
            <Row>
              <Col md={6}>
                <div className="product_thumb">
                  <Thumb
                    src={product?.thumbnail?.src}
                    alt="Product Image"
                    styles={{ height: "320px" }}
                  />

                  <h6>{product?.name}</h6>
                </div>
              </Col>
              <Col md={6}>
                <div className="product_content">
                  <div className="pricing">
                    <span>Price:</span>
                    <span className="mx-2">৳{product?.price?.base_sale}</span>
                    <del>৳{Math.round(product?.price?.base_sale * 1.3)}</del>
                  </div>
                  {/* <div className="product-info">
                    <h6>Product Info</h6>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>Sed blandit magna vel sapien euismod malesuada.</li>
                      <li>
                        Maecenas nec sapien feugiat, ornare metus in, eleifend
                        nunc.
                      </li>
                      <li>Phasellus sagittis erat at enim porta congue.</li>
                    </ul>
                  </div> */}
                  <div className="quantity-info">
                    <h6>Quantity:</h6>

                    <form action="#" method="post" className="quantity">
                      <input
                        onClick={() => dispatch(decreaseFromCart(product?.id))}
                        type="button"
                        value="-"
                        className="decrease"
                      />
                      <input
                        type="number"
                        value={
                          findCartIndex !== -1
                            ? carts?.[findCartIndex]?.quantity
                            : 0
                        }
                        name="qty"
                        className="quantity"
                      />

                      <input
                        type="button"
                        value="+"
                        onClick={(e) => {
                          dispatch(addToCart(product?.id));
                        }}
                        className="increase"
                      />
                    </form>
                  </div>

                  <div className="stock">
                    <h6>Available Product:</h6>
                    <span>In our stock</span>
                  </div>

                  <div className="cart-save">
                    <button className="custom_btn mb-2 w-100">Buy Now</button>
                    <button className="custom_btn w-100 tertiary">
                      Add To Cart
                    </button>
                  </div>

                  <div className="share-tag">
                    <h6>Social Share:</h6>
                    <ul className="social_links d-flex align-items-center">
                      <li>
                        <i className="fab fa-facebook"></i>
                      </li>
                      <li>
                        <i className="fab fa-instagram"></i>
                      </li>
                      <li>
                        <i className="fab fa-twitter"></i>
                      </li>
                      <li>
                        <i className="fab fa-linkedin"></i>
                      </li>
                      <li>
                        <i className="fab fa-youtube"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="close-modal" onClick={handleClose}>
          <Image src={CrossIcon} alt="Cross icon" width={24} height={24} />
        </div>
      </div>
    </Modal>
  );
};
