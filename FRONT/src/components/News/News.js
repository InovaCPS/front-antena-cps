import React from 'react';
import { Card, CardBody, CardText, CardHeader, CardTitle, Button  } from 'mdbreact';
import './index.css';


const News = props => {
  return (
    <Card style={{ width: '22rem', marginTop: '40%' }} className="text-center">
      <CardHeader color="danger-color-dark">Sintonize-se</CardHeader>
      <CardBody>
        <CardTitle><iframe width="auto" frameborder="0" height="auto" src="https://www.youtube.com/embed/XY8h1oyu4vI"></iframe></CardTitle>
        <CardText>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i class="fas fa-check"> Projetos</i>
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i class="fas fa-check"> Inovação</i>
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i class="fas fa-check"> Visibilidade</i>
          </div>
        </CardText>
        <Button color="red" size="sm" >ANTENE-SE</Button>
      </CardBody>
    </Card>
  );
}

export default News;
