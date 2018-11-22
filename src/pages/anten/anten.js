import React, { Component } from 'react';
import "./anten.css"
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../../components/Navbar/BackDrop/BackDrop';
import Schedule from '../../components/Schedule/Schedule';

class anten extends Component{
        state = {
            sideDrawerOpen: true
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
                    <Schedule  />
                </main>
                    <Footer />
                </div>
            )
        }
    
    }

export default anten;