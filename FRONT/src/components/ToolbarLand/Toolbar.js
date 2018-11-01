import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Toolbar.css';

class ToolbarLand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="danger-color-dark" light expand="md" scrolling className="d-flex justify-content-between">
                    <NavbarBrand href="/">                   
                            <div className="logo p-2 justify-content-start">
                                <a href="/">Antena <i class="fas fa-broadcast-tower"></i> CPS</a>
                            </div>
                            <div className="p-2 justify-content-end">
                                <input className="login" placeholder="Usuario" />
                                <input className="login" placeholder="Senha" />
                                <button type="login">Entrar</button>
                            </div>              
            </NavbarBrand>      
         </Navbar>
    </Router>   
        );
    }
}

export default ToolbarLand;