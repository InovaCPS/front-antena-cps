import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  showModal = true ;
  @ViewChild('email') email: ElementRef;

  resposta: any;
  title = 'Cadastro - AntenaCPS';
  model: any = {};
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";


  constructor(private http: HttpClient,
              public titleService: Title,
              private router: Router,  
              @Inject(PLATFORM_ID) 
              private platformId: Object) {}

                facebook = require('../../app/images/fbAccessBt.png')
                google = require('../../app/images/gglAccessBt.png')
                linkedin = require('../../app/images/inAccessBt.png')
                // yt = require('../../app/images/youtube.png')

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
        if(this.resposta == "E-mail enviado com sucesso!"){
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
            text: 'Email já cadastrado',
            type: 'error',
            showCancelButton: true,
            confirmButtonText: 'Tentar Novamente',
            cancelButtonText: 'Fazer Login',
          }).then((result) =>{
            if(result.value){
              document.getElementById('email').focus();
            }
            else if( result.dismiss === Swal.DismissReason.cancel){
              document.getElementById('openModalButton').click();
            }
          }) 
        }
      } )
  } 
  postLoggin(){   
    let urlLogin = `${this.apiRoot}/login`;
    this.http.post(urlLogin, { username: this.model.email, password: this.model.password })
    .subscribe(res =>{ 
      this.resposta = res;
      localStorage.setItem('token', JSON.stringify(this.resposta)) 
      this.router.navigate(['/aluno']);   
    })
   
  }

  setFocus(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      this[id].nativeElement.focus();
    }
  }


}