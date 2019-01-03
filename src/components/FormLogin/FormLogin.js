import React, { Component } from "react"
import './FormLogin.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

class App extends Component {
    state = {

    }
    constructor() {
        super();
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);

    }

    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }
    renderForm = () => {
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};

            return (
                <div key={key} className="form-group" id="formLogin">
                    <input {...props}
                        ref={(key) => { this[m.key] = key }}
                        className="item"
                        type={type}
                        key={"i" + m.key}
                        onChange={(e) => { this.onChange(e, key) }}
                    />
                </div>
            );
        });
        return formUI;
    }
    render() {
        return (
            <form onSubmit={(e) => { this.onSubmit(e) }}>
                {this.renderForm()}
                <input className="botao" class="btn btn-blue" type="submit" value="Entrar" />
                <MDBBtn color="blue" social="fa">
                    <MDBIcon icon="facebook" className="pr-2" /> Facebook
            </MDBBtn>
                <MDBBtn color="red" social="g-plus">
                    <MDBIcon icon="google-plus" className="pr-1" /> Login
            </MDBBtn>
            </form>
        );
    }
}

export default App;

