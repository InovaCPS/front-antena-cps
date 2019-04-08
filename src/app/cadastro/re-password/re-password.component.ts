import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-re-password',
  templateUrl: './re-password.component.html',
  styleUrls: ['./re-password.component.css']
})
export class RePasswordComponent implements OnInit {
  resposta: any;
  model: any = {};
  date;
  title = 'Redefinir Senha - Antena CPS';
  constructor(public titleService: Title,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
              }

  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
  ngOnInit() {
    this.date = this.activatedRoute.snapshot.params['token']
  }


  onSubmit() {
    this.doPost();
  }

<<<<<<< HEAD
=======

>>>>>>> 439a8425452cc90fa41863ab01b40320c1d08f26
  doPost(){
    let url = `${this.apiRoot}/cp/reset_password`;
    this.http
<<<<<<< HEAD
      .put(url, {id_geral: this.model.id, senha: this.model.password })
=======
      .put(url, {token: this.date, senha: this.model.password })
>>>>>>> 439a8425452cc90fa41863ab01b40320c1d08f26
      .subscribe(res =>{
        this.resposta = res['Mensagem'];
        if(this.resposta == "Senha alterado com sucesso!"){
          Swal.fire({
            title: 'Senha Alterada',
            text: '',
            type: 'success',    
            confirmButtonText: 'Continuar',
            onClose: () =>{
              this.router.navigate(['']); 
              //this.openModalLogin();
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
