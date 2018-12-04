import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import FormLogin from '../../components/FormLogin/FormLogin';

class ToolbarLand extends React.Component {
            
    state = {
        data:[
          {email:"teste@email.com", senha:"senha"}
        ]
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
                this.setState({data: data})
                return alert( JSON.stringify(data))
            })
  
        
   }

    render() {

        return (
            <Router>
                <Navbar color="danger-color-dark" expand="md" scrolling fixed="top">
                    <NavbarBrand className="Logo">
                        <a href="/">Antena <i class="fas fa-broadcast-tower"></i> CPS</a>
                    </NavbarBrand>
                        <NavbarNav right>
                          <NavItem>
                            <FormLogin className="login"                        
                                model = {[
                                    {key: "username", props:{placeholder:"Email"}},
                                    {key: "password", type:"password", props:{min:6, max:12, placeholder:"Senha"}}
                                ]}        
                                onSubmit = {(model) => {this.onSubmit(model)}}/>
                            
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default ToolbarLand;