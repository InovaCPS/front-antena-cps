import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private router: Router,  ) {}
  banner = require('../../app/images/grupo.jpg')
  graf = require('../../app/images/background.png')

  user = JSON.parse(localStorage.getItem('userInfo'));


  userLogin(){
    if(localStorage.getItem('userInfo') != null){
      document.getElementById('openModalCont').click();
    }
    else {
      document.getElementById('openModal').click();
    }
  }
  setEmail(): void {
      document.getElementById('username').setAttribute('value', this.user.email);
      document.getElementById('username').setAttribute('placeholder', this.user.email);
  }

  redirectCadastro(){
    this.router.navigate['/cadastro'];
  }
}
