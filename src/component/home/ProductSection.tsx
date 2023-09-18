import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@/component";
import { useState } from "react";
import { useAppSelector } from "@/store/store";

export const ProductSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { products } = useAppSelector((state) => state.productReducer.value);

  return (
    <div className="product_section">
      <Container>
        <div className="section_heading">
          <h3>Special Product</h3>
        </div>

        <div className="product_tab d-flex align-items-center justify-content-center mb-5">
          <button
            onClick={() => setActiveTab(1)}
            className={
              activeTab === 1 ? "custom_btn me-2" : "custom_btn me-2 outline"
            }
          >
            Story
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={
              activeTab === 2 ? "custom_btn me-2" : "custom_btn me-2 outline"
            }
          >
            Academic
          </button>
        </div>

        <div className="product_wrapper">
          <Row>
            {products?.map((product, index) => (
              <Col key={index} md={3} className="mb-4">
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <div className="my-4 action_btn d-flex align-items-center justify-content-center">
            <button className="custom_btn mb-5">
              See More
              <i
                className="fas fa-chevron-right ms-2"
                style={{ fontSize: "11px" }}
              ></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
