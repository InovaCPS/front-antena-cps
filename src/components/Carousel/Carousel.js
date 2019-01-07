import React from "react";
import img1 from "../../data/images/team(1).jpg";

const CarouselL = props => (

<div id="carouselExampleIndicators" className="carousel slide"  data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        </ol>
        <div className="carousel-inner" >
            <div className="carousel-item active">
                <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
); 
 
export default CarouselL;

