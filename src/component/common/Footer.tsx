import { useAppSelector } from "@/store/store";
import parse from "html-react-parser";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  const { footer, locations, store_info } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );

  return (
    <footer>
      <div className="footer_top py-md-5 py-4">
        <Container>
          <Row>
            <Col md={5}>
              <div className="footer_widget mb-md-0 mb-3">
                <div className="widget_heading">
                  <h6>About Us</h6>
                </div>
                <div className="widget_content">
                  <div className="text">
                    {parse(footer?.body?.column1?.list?.text_oaT6SY?.content)}
                  </div>

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

            <Col md={3}>
              <div className="footer_widget mb-md-0 mb-3">
                <div className="widget_heading">
                  <h6>Quick Links</h6>
                </div>
                <div className="widget_content">
                  <ul className="quick_links">
                    {footer?.body?.column4?.list?.menubar_87srO8?.list?.map(
                      (menu, index) => (
                        <li key={index}>{menu?.text}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="footer_widget mb-md-0 mb-3">
                <div className="widget_heading">
                  <h6>Contact Us</h6>
                </div>
                <div className="widget_content">
                  <ul className="contact_info">
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker"></i>
                      </div>
                      <div className="info">
                        <h6>Location</h6>
                        <span className="text">{locations?.[0]?.address}</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="info">
                        <h6>Phone Number</h6>
                        <span className="text">{locations?.[0]?.mobile}</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info">
                        <h6>Email Address</h6>
                        <span className="text">{locations?.[0]?.email}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer_bottom py-3">
        &copy; {new Date().getFullYear()} {store_info?.domain}. All rights
        reserved.
      </div>
    </footer>
  );
};
