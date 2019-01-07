import React from 'react';
import { Col, Container, Row, Footer } from "mdbreact";
import imgCPS from "../../data/images/logo-cps-brasao-01.png";


class FooterPage extends React.Component {
render() {
return (
<Footer color="white" className="footerLand">
  <Container>
      <img src={imgCPS} style={{height: '88px'}}/> 
  </Container>
</Footer>
);
}
}

export default FooterPage;

