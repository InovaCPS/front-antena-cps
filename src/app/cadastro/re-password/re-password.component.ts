import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-re-password',
  templateUrl: './re-password.component.html',
  styleUrls: ['./re-password.component.css']
})
export class RePasswordComponent implements OnInit {

  resposta: any;
  model: any = {};
  title = 'Redefinir Senha - Antena CPS';
  constructor(public titleService: Title,
              private http: HttpClient,
              private route: ActivatedRoute) { }

  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
  ngOnInit() {
    this.model.id = this.route.snapshot.paramMap.get("id")
  }


  onSubmit() {
    this.doPost();
  }

  313

  doPost(){
    this.model.test = 313;
    let url = `${this.apiRoot}/cp/reset_password`;
    this.http
      .put(url, {id_geral: this.model.test, senha: this.model.password })
      .subscribe(res =>{
        this.resposta = res['Mensagem'];
        if(this.resposta == "Senha alterado com sucesso!"){
          Swal.fire({
            title: 'Senha Alterada',
            text: '',
            type: 'success',    
            confirmButtonText: 'Continuar',
            onClose: () =>{
              this.openModalLogin();
            }
          })
        }
        else{
          Swal.fire({
            title: '',
            text: 'Não conseguimos redefinir sua senha',
            type: 'error',
            confirmButtonText: 'Ok'
          }) 
        }
      } )
  }

  openModalLogin(){
    document.getElementById('openModal').click();
  }
}
