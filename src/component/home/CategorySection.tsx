import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Thumb } from "@/component";
import { useAppSelector } from "@/store/store";

export const CategorySection = () => {
  const { theme_info } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );
  return (
    <div className="category_section py-3">
      <Container>
        <Row>
          {theme_info?.category_1JXLtF?.list?.map((category, index) => (
            <Col md={3} key={index} className="mb-md-0 mb-4">
              <div className="categroy_item">
                <Thumb
                  src={category?.thumb}
                  alt={category?.name}
                  styles={{ height: "100px" }}
                />
                <div className="item-layer"></div>
                <div className="item-layer-effect"></div>

                <div className="content">
                  <h6 className="title mb-0 text-center">{category?.name}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
