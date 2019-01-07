import React, { Component } from 'react';
import './index.css'
// import FormLand from '../../components/FormLand/FormLand';
import FooterLand from '../../components/FooterLand/FooterLand';
import ToolbarLand from '../../components/ToolbarLand/Toolbar';
import CarouselL from '../../components/Carousel/Carousel';

// import News from '../../components/News/News';


class LandPage extends Component {
    componentDidMount() {
        document.title = "Cadastro"
    }

    state = {
        data: [
            { nome: "a", cpf: 12345678954, ra: 123464564, email: "teste@email.com", senha: "senha" }
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
                this.setState({ data: data })
                return alert(JSON.stringify(data))
            })
    }
    render() {
        return (
            <main>
                <div className="content">
                    <ToolbarLand />
                </div>
                <div className="">
                    <CarouselL />
                </div>
                <br />
                <br />

                <h1 className="txt1">Captando INOVAÇÃO,</h1>
                <h1 className="txt1">&nbsp; &nbsp;propagando para os <b className="txt3">antenados</b></h1>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="footer" >
                    <FooterLand />
                </div>
            </main>
        )
    }
}

export default LandPage;