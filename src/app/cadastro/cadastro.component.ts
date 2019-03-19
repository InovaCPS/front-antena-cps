import { Component, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title }     from '@angular/platform-browser';

import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalFailComponent } from './modal-fail/modal-fail.component';



@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild('modalSuccess') modalSuccess : ModalSuccessComponent;
  @ViewChild('modalFail') modalFail : ModalFailComponent;
  resposta: string;
  data: any;
  title = 'Cadastro - AntenaCPS';
  model: any = {};
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";


  constructor(private http: HttpClient,
              public titleService: Title  ) {}

  ngOnInit(){
    this.titleService.setTitle(this.title)
  }

  onSubmit() {
    this.doPOST()
    this.openModal()
  }


  doPOST() {
    
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.model.firstName, sobrenome: this.model.lastName, email: this.model.email, senha: this.model.password })
      .subscribe(res =>{
        this.resposta = res['Mensagem'];
        console.log(this.resposta)
      } )
      } 
      openModal(){
        if(this.resposta == "Adicionado com sucesso!"){
          alert(this.resposta)
      }
      else{
        alert(this.resposta)
      }
      }

      showModalSuccess() {
        this.modalSuccess.show();
      }
      showModalFail(){
        this.modalFail.show();
      }
}

