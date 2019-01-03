import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import FormLogin from '../../components/FormLogin/FormLogin';
import './popup.css';
import '../FormLogin/FormLogin.css';
import logo from '../../data/images/logo1-02.png';
import '../Navbar/Navbar.css';
// import '../Jumbotron/Jumbotron';

class Popup extends React.Component {
    state = {
        data: [
            { username: "teste@email.com", password: "senha" }
        ]
    }
    constructor() {
        super();
    }

    onSubmit = (model) => {
        fetch("http://34.226.121.69:8080/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(model)

            })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
                return alert(JSON.stringify(data))
            })
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <button class="btn btn-blue btn-custom" type="button" onClick={this.props.closePopup}><span class="glyphicon glyphicon-ok img-circle btn-icon"></span>X</button>
                    <div>
                        <img src={logo} style={{ width: '24%', float: "left" }} />
                    </div>
                    <br /><br /><br /><br />
                    <div class='container'>
                        <h3><b>{this.props.text}</b></h3>
                        <h6>Caso seja Aluno(a), Parceiro(a) ou Gestor(a), faça o login! </h6>
                        <br />
                        <FormLogin className="login"
                            model={[
                                { key: "username", props: { placeholder: "Email" } },
                                { key: "password", type: "password", props: { min: 6, max: 12, placeholder: "Senha" } }
                            ]}
                            onSubmit={(model) => { this.onSubmit(model) }} />
                        <br />
                        <br />
                        <label>Primeiro Acesso? Cadastre-se <b>aqui</b> ou continue com:</label>
                    </div>
                </div>
            </div>
        );
    }
}

class ToolbarLand extends React.Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });

    }
    render() {
        return (
            <Router>
                <Navbar color="white" expand="md" scrolling fixed="top" className="toolbar" >
                    <NavbarBrand className="Logo">
                        <div className="toolbar-logo"><a href="/"><img src={logo} style={{ width: '70px' }} style={{ height: '80px' }} /></a></div>
                    </NavbarBrand>
                    <NavbarNav right>
                        <div className='app'>
                            <input className="item" class="btn btn-blue" type="submit" value="Entrar" onClick={this.togglePopup.bind(this)} />
                            {this.state.showPopup ?
                                <Popup
                                    text='Entrar'
                                    closePopup={this.togglePopup.bind(this)}
                                />
                                : null
                            }
                        </div>
                    </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}
export default ToolbarLand;