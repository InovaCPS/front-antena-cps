import React from 'react';
import { Card, CardBody, CardText, CardHeader, CardTitle, Button  } from 'mdbreact';
import './News.css';


const News = props => {
  return (
    <Card style={{ width: '21rem', marginTop: '16%' }}  className="text-center">
      <CardHeader color="danger-color-dark">Sintonize-se</CardHeader>
      <CardBody>
        <CardTitle><iframe width="auto" frameborder="0" height="auto" src="https://www.youtube.com/embed/XY8h1oyu4vI"></iframe></CardTitle>
        <CardTitle className="letra">
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul"/> Projetos
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul" /> Inovação
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul"  /> Visibilidade
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul"  /> Conquistas 
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul" /> Parceiros
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
            <i className="fas fa-check azul" /> Studex
          </div>
          <div className="row" style={{  marginLeft: '15%', fontSize: '20px' }}>
           <a className="robert" href="/about"><i  class="fas fa-plus" /> Saiba mais</a>
          </div>             
        </CardTitle>
        <Button color="red" size="md" >ANTENE-SE</Button>
      </CardBody>
    </Card>
  );
}

export default News;
