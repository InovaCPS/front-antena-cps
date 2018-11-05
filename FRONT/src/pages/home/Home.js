import React, { Component } from 'react';

import './index.css';

class Home extends Component{
    componentDidMount(){
        document.title = "Home"
      }
    render(){
        return(
            <div>
                <a href="/">Antena <i class="fas fa-broadcast-tower"></i> CPS</a>
            </div>
        )
    }
}

export default Home;