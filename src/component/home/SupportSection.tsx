import { useAppSelector } from "@/store/store";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

export const SupportSection = () => {
  const { theme_info } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );

  return (
    <div className="support_section py-md-5 py-4">
      <Container>
        <Row>
          {theme_info?.service_PWt3Ot?.list?.map((support, index) => (
            <Col md={4} key={index}>
              <div className="support_item mb-md-0 mb-3 one">
                <div className="support_inner">
                  <h6 style={{ textTransform: "capitalize" }}>
                    {support?.title}
                  </h6>
                  <span className="d-block">{parse(support?.content)}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
