import React, { Component } from 'react';
import "./anten.css"
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../../components/Navbar/BackDrop/BackDrop';
import Schedule from '../../components/Schedule/Schedule';

class anten extends Component{
        state = {
            sideDrawerOpen: true,
            event : [ {titulo: "como programar Orientado a Objeto", 
            descricao: "será explicado como programar Orientado a Objeto", 
            tipo: "curso", 
            duracao: "60", 
            banner: "o caminho do banner", 
            eventos:[""], 
            materiais:[""]}]
        };
        drawerToggleClickHandler = () =>{
            this.setState((prevState) => {
                return{sideDrawerOpen: !prevState.sideDrawerOpen};
            });
        };
    
        render(){
            let sideDrawer;
            let backdrop;
    
            if (this.setState.sideDrawerOpen) {
                sideDrawer = <SideDrawer />;
                backdrop = <Backdrop />
            }
            return(
                <div style={{height: '100%'}}>
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                    {sideDrawer}
                    {backdrop}
                <main className="content">
                    <div className="doc-example">
                        <Schedule className="form"
        title = "Registro"
        model = {[
            {key: "nome", label: "Nome", props:{}},
            {key: "sobrenome", label: "Sobrenome", props:{}},
            {key: "email", label: "Email", props:{}},
            {key: "senha", label: "Senha", type:"password", props:{min:6, max:12}}
        ]}        
        onSubmit = {(model) => {this.onSubmit(model)}}/>
                    </div>
                </main>
                <div className="footer">
                    <Footer />
                    </div>
                </div>
            )
        }
    
    }

export default anten;