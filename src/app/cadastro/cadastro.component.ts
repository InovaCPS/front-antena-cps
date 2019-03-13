import { AppComponent } from './../app.component';
import { Component, OnInit  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
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
    
  }


  doPOST() {
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.model.firstName, sobrenome: this.model.lastName, email: this.model.email, senha: this.model.password })
      .subscribe(res => console.log(res['Mensagem']))
  } 
}
