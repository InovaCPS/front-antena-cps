import React from 'react';
import { Col, Container, Row, Footer } from "mdbreact";


class FooterPage extends React.Component {
render() {
return (
<Footer color="danger-color-dark" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Centro Paula Souza</h5>
      <p className="futao">
            Governo do Estado de São Paulo
      </p>
      </Col>
      <Col md="6">
         <button type="button" className="btn btn-indigo"><i className="fa fa-envelope pr-2" aria-hidden="true"></i>Entre em Contato</button>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="http://www.inovapaulasouza.cps.sp.gov.br/home.jsp" target="__blank"> Inova Paula Souza </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;