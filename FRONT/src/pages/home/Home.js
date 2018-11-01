import React, { Component } from 'react';

import './index.css';

class Home extends Component{
    componentDidMount(){
        document.title = "Home"
      }
    render(){
        return(
            <div>
                <h1>TESTE HOME</h1>
            </div>
        )
    }
}

export default Home;