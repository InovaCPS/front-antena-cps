import React, { Component } from "react"
import './FormLogin.css';



class App extends Component {
  state = {

  }
  constructor(){
      super();
  }

  onSubmit = (e) => {
      e.preventDefault();
      if (this.props.onSubmit) this.props.onSubmit(this.state);
     
  }

  onChange = (e, key) =>{
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
                  <label className="form-label" key={"l" + m.key} htmlFor={m.label}>{m.label}
                  </label>
                  <input {...props}
                      ref={(key) => {this[m.key]=key}}
                      className="item"
                      type={type}
                      key={"i" + m.key}
                      onChange ={(e)=>{this.onChange(e, key)}}
                  />
              </div>
          );
      });
      return formUI;
  } 
  render() {
    return (
        <form className="login" onSubmit={(e)=>{this.onSubmit(e)}}>
            {this.renderForm()}
            <input className="item" class="btn btn-outline-light" type="submit" value="Entrar" />
            
        </form>
    );
  }
}

export default App;