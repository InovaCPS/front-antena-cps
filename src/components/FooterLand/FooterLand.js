import React from 'react';
import { Col, Container, Row, Footer } from "mdbreact";
import imgCPS from "../../data/images/logo-cps-brasao-01.png";


class FooterPage extends React.Component {
render() {
return (
<Footer color="white" className="footerLand">
  <Container fluid className="text-md-rigth">
    <Row>
      <img src={imgCPS} style={{width: '300px'}} style={{height: '88px'}}/>      
    </Row>
  </Container>
</Footer>
);
}
}

export default FooterPage;

