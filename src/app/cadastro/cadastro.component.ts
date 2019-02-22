import { Component } from '@angular/core';
import { map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://localhost:8080";
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;

  constructor(private http: HttpClient) {}

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.nome, sobrenome: this.sobrenome, email: this.email, senha: this.senha })
      .subscribe(res => console.log("Cadastrado com Sucesso!!!"))         
  }
}
