import React, { Component }from 'react';

import "./Schedule.css";
import News from '../../components/News/News';
import FormLand from '../../components/FormLand/FormLand';

class Schedule extends Component{
    state = {
        titulo: "como programar Orientado a Objeto", 
	    descricao: "será explicado como programar Orientado a Objeto", 
	    tipo: "curso", 
	    duracao: "60", 
	    banner: "o caminho do banner", 
	    eventos:[
		["1", "2018-10-15", "14:00"], 
		["1", "2018-10-16", "14:00"], 
		["1", "2018-10-17", "14:00"]
	], 
	materiais:[
		["caminho do material 1"], 
		["caminho do material 2"]
	]
    }
    onSubmit = (model) => {
        fetch("http://34.226.121.69:8080/cp/evento",
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
                <div className="container cont">
                    
            </div>
        );
      }
    }
export default Schedule;