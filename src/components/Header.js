import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Row>
            <Col xs="auto">
              <a
                href="https://youtube.com/easyfrontend"
                target="_blank"
                rel="noreferrer"
                className="header-link header-title"
              >
                Easy Frontend
              </a>
            </Col>
            <Col xs="auto">
              <NavLink to="/photos" className="header-link">
                Redux Project
              </NavLink>
            </Col>
          </Row>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
