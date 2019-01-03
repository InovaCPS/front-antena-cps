import React, { Component } from 'react';
import "./Schedule.css";

class Schedule extends Component{
    state = {

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
                
                <div key={key} className="form-group">
                    <label className="form-label" key={"l" + m.key} htmlFor={m.label}>{m.label}
                    </label>
                    <input {...props}
                        ref={(key) => {this[m.key]=key}}
                        className="form-input"
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
        <div className="card">
          <div className="form-wrapper">
            <h1>Seja um Antenado</h1>
            <form id="test-form" className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                  {this.renderForm()}
                  <div className="form-group">
                  <button type="submit">ENVIAR</button>
                  </div>
            </form>
          </div>
        </div>
      );
    }
  }
export default Schedule;