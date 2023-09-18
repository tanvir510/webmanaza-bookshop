import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Thumb, Product } from "@/component";
import FeaturedImage from "@/assets/images/main/featured_book.jpg";
import { useAppSelector } from "@/store/store";

interface ImageInfo {
  url: string;
  alt: string;
}

const products: ImageInfo[] = [
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  {
    url: "https://bookshop.webmanza.com/_next/image?url=https%3A%2F%2Fapi.admin.webmanza.com%2Fassets%2Fproduct%2Fgallery%2F139_20_1660219743015_410453273_product_gallery.jpeg&w=640&q=75",
    alt: "Bookshop Image",
  },
  // Add more products here if needed
];

export const FeatureProduct = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { products } = useAppSelector((state) => state.productReducer.value);
  const slideCount = 1;

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }: any) => <div {...props}>{children}</div>;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slideCount,
    slidesToScroll: 1,
    prevArrow: (
      <SlickButtonFix>
        <div className="custom-arrow custom-left-arrow">
          <i className="fas fa-chevron-left"></i>
        </div>
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <div className="custom-arrow custom-right-arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </SlickButtonFix>
    ),
  };

  return (
    <div className="feature_product section_padding">
      <Container>
        <Row>
          <Col md={3}>
            <div className="widget_item">
              <div className="widget_heading d-flex align-items-center justify-contnet-between">
                <div className="h6">New Arrival</div>
              </div>

              <div className="feature_slider_container">
                <Slider {...settings}>
                  {products
                    ?.slice(products?.length - 3, products?.length)
                    .map((product: any, index) => (
                      <div key={index}>
                        <Product product={product} />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>

            <div className="widget_item">
              <div className="widget_heading d-flex align-items-center justify-contnet-between">
                <div className="h6">Upcoming Product</div>
              </div>

              <div className="hot_product_wrapper">
                <div className="product_item">
                  <div className="thumb">
                    <Thumb
                      src={FeaturedImage}
                      alt="Featured Image"
                      styles={{ height: "250px" }}
                    />

                    <div className="wish_icon action_icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className="compare_icon action_icon">
                      <i className="fas fa-redo"></i>
                    </div>
                    <div className="preview_icon action_icon">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>

                  <div className="content">
                    <h6>The Silent Patient</h6>

                    <div className="pricing">
                      ৳600 <del>৳500</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={9}>
            <div className="product_tab d-flex align-items-center justify-content-center mb-4">
              <button
                onClick={() => setActiveTab(1)}
                className={
                  activeTab === 1
                    ? "custom_btn me-2"
                    : "custom_btn outline me-2"
                }
              >
                Featured
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={
                  activeTab === 2
                    ? "custom_btn me-2"
                    : "custom_btn outline me-2"
                }
              >
                Best Seller
              </button>
              <button
                onClick={() => setActiveTab(3)}
                className={
                  activeTab === 3
                    ? "custom_btn me-2"
                    : "custom_btn outline me-2"
                }
              >
                Popular
              </button>
            </div>
            <Row>
              {products?.slice(0, 6)?.map((product, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
