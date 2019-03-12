import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  model: any = {};
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";


  constructor(private http: HttpClient) {}


  onSubmit() {
    this.doPOST()
    
  }


  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.model.firstName, sobrenome: this.model.lastName, email: this.model.email, senha: this.model.password })
      .subscribe(res => console.log(res['Mensagem']))         
  }

  
}
