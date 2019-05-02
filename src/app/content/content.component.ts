import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private router: Router,  ) {}
  banner = require('../../app/images/grupo.jpg')
  graf = require('../../app/images/background.png')


  userLogin(){
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/aluno']); 
    }
    else{
    document.getElementById('openModal2').click();
    }
  }

}
