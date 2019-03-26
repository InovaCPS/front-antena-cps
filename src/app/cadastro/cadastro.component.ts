import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title }     from '@angular/platform-browser';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  showModal = true ;
  
  resposta: any;
  data: any;
  title = 'Cadastro - AntenaCPS';
  model: any = {};
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";


  constructor(private http: HttpClient,
              public titleService: Title,
              private router: Router  ) {}

  ngOnInit(){
    this.titleService.setTitle(this.title)
  }

  onSubmit() {
    this.doPOST()
  }


  doPOST() {
    
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.model.firstName, sobrenome: this.model.lastName, email: this.model.email, senha: this.model.password })
      .subscribe(res =>{
        this.resposta = res['Mensagem'];
        if(this.resposta == "Cadastrado com sucesso!"){
          Swal.fire({
            title: 'Cadastro realizado com sucesso!',
            text: '',
            type: 'success',    
            confirmButtonText: 'Continuar',
            onClose: () =>{
              this.postLoggin()
            }
          })
        }
        else{
          Swal.fire({
            title: '',
            text: 'Email já cadastrado.',
            type: 'error',
            confirmButtonText: 'OK'
          })
        }
      } )
  } 
  postLoggin(){   
    let urlLogin = `${this.apiRoot}/login`;
    this.http.post(urlLogin, { username: this.model.email, password: this.model.password })
    .subscribe(res => { 
      this.resposta = res;
      localStorage.setItem('token', JSON.stringify(this.resposta)) })
    this.router.navigate(['/aluno']);   
  }

}