import React, { Component } from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../../components/Navbar/BackDrop/BackDrop';
import foto1 from './cps1.jpg';
import foto2 from './cps2.jpg';
import foto3 from './cps3.jpg';

class aboutcps extends Component{
    state = {
        sideDrawerOpen: true
    };
    drawerToggleClickHandler = () =>{
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    render(){
        let sideDrawer;
        let backdrop;

        if (this.setState.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop />
        }
        return(
            <div style={{height: '100%'}}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {backdrop}
            <main className="content">
                <div className="InfoGraf">
                    <div className="container">
                        <div className="row"></div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col graf">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={foto1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={foto2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={foto3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
            </main>
            <div className="footer">
                <Footer />
            </div>
            </div>
        )
    }

}

export default aboutcps;