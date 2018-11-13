import React from "react";
import './Footer.css';


const Footer = props => (
    
    <div>
        <div class="footer-main-div">
            <div class="footer-social-icons">
                <ul>
                    <li><a href="#" target="blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" target="blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" target="blank"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" target="blank"><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="footer-menu-one">
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Contato </a></li>
                <li><a href="#"> ENDEREÇO </a></li>
                <li><a href="#"> TELEFONE</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>Copyright©<a href="#"> - INOVA Paula Souza</a></p>
        </div>
    </div>
    

);

export default Footer;

