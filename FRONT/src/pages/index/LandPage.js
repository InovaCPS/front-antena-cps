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

    render() {

        return (
            <main>
            <div className="content">
                <ToolbarLand /> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <News />
                        </div>
                        <div className="col">
                            <FormLand />
                        </div>
                    </div>
                </div>
                <FooterLand />
            </main>  
        )
    }
}

export default LandPage;