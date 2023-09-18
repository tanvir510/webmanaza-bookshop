// File Import
import { ProductModal, Thumb } from "@/component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseFromCart,
  deleteFromCart,
} from "@/store/features/productSlice";

export const Product = ({ product }: any) => {
  const [openProductModal, setOpenProductModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="product_item">
        <div className="thumb">
          <Thumb
            src={product?.thumbnail?.src}
            alt="Product Image"
            styles={{ height: "275px" }}
          />

          <button
            className="custom_btn cart_btn"
            onClick={() => dispatch(addToCart(product?.id))}
          >
            <i className="fas fa-shopping-cart"></i> Add To Cart
          </button>

          <div className="wish_icon action_icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="compare_icon action_icon">
            <i className="fas fa-redo"></i>
          </div>
          <div className="preview_icon action_icon">
            <i
              onClick={() => {
                setOpenProductModal(true);
              }}
              className="fas fa-search"
            ></i>
          </div>
        </div>

        <div className="content">
          <h6
            onClick={() => {
              setOpenProductModal(true);
            }}
            style={{ cursor: "pointer" }}
          >
            {product?.name}
          </h6>
          <ul className="review_list d-flex align-items-center">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="far fa-star"></i>
            </li>
            <li>
              <i className="far fa-star"></i>
            </li>
          </ul>

          <div className="pricing">
            ৳{product?.price?.base_sale}
            <del>৳{Math.round(product?.price?.base_sale * 1.3)}</del>
          </div>
        </div>
      </div>

      {openProductModal && (
        <ProductModal
          show={openProductModal}
          product={product}
          handleClose={() => setOpenProductModal(false)}
        />
      )}
    </>
  );
};
