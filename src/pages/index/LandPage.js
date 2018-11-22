import React, { Component } from 'react';
import './index.css'
import FormLand from '../../components/FormLand/FormLand';
import FooterLand from '../../components/FooterLand/FooterLand';
import ToolbarLand from '../../components/ToolbarLand/Toolbar';
import News from '../../components/News/News';
    

class LandPage extends Component{
    componentDidMount() {
        document.title = "Cadastro"
    }

    state = {
        data:[
          {nome:"a", cpf:12345678954, ra:123464564, email:"teste@email.com", senha:"senha"}
        ]
    }
    onSubmit = (model) => {
        fetch("http://34.226.121.69:8080/cp/parceiro",
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
            <main>
            <div className="content">
                <ToolbarLand /> 
                <div className="jumbotron jumbotron-fluid">
                    <div className="container jumb">
                    </div>
                </div>
                <div className="container cont">
                    <div className="row">
                        <div className="col">
                            <News />
                        </div>
                        <div className="col">
                            <FormLand className="form"
        title = "Registro"
        model = {[
            {key: "nome", label: "Nome", props:{}},
            {key: "sobrenome", label: "Sobrenome", props:{}},
            {key: "email", label: "Email", props:{}},
            {key: "senha", label: "Senha", type:"password", props:{min:6, max:12}}
        ]}        
        onSubmit = {(model) => {this.onSubmit(model)}}/>
                        </div>
                    </div>
                </div>
            </div>
                <FooterLand />    
            </main>  
        )
    }
}

export default LandPage;