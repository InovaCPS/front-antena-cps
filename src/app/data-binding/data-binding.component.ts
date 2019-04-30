import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {
  resposta: any;
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
  emailPassword: string;
  logo = require('../../app/images/antena_logo.png')
  facebook = require('../../app/images/fbAccessBt.png')
  google = require('../../app/images/gglAccessBt.png')
  linkedin = require('../../app/images/inAccessBt.png')
  // close = require('../../app/images/divide.png')

  model: any = {};

  urlPassword = '${this.apiRoot}/cp/forgot_password'
  dataGooogle;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  submitPassword() {
    let url = `${this.apiRoot}/cp/forgot_password`
    this.http.post(url, { email: this.model.email })
      .subscribe(res => {
        this.resposta = res;
        if (this.resposta['Mensagem'] == 'E-mail enviado com sucesso!') {
          Swal.fire({
            title: 'E-mail para recuperação de senha enviado.',
            html: '<p> O e-mail foi enviado para ' + this.model.email + ' e contem as instruções para a redefinição de senha.</p>',
            confirmButtonText: 'OK',
            onClose: () => {
              document.getElementById('openModal').click();
            }
          })
        }
        else {
          Swal.fire({
            title: 'E-mail não cadastrado',
            text: ' O e-mail ' + this.model.email + ' não foi encontrado nos nossos registros.',
            showCancelButton: true,
            cancelButtonText: 'Tentar novamente',
            confirmButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              document.getElementById('clickPassword').click();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              document.getElementById('email').focus();
            }
          })
        }
      })
  }
  onSubmit() {
    this.doPOST();
  }
  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/login`;
    this.http
      .post(url, { username: this.model.email, password: this.model.password })
      .subscribe(res => {
        this.resposta = res;
        if (this.resposta['Mensagem'] == 'Não foi possivel verificar') {
          Swal.fire({
            title: 'E-mail não cadastrado.',
            text: '',
            type: 'error',
            confirmButtonText: 'Faça o cadastro',
            showCancelButton: true,
            cancelButtonText: 'Tentar novamente',
          }).then((result) => {
            if (result.value) {
              this.router.navigate(['/cadastro']);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              document.getElementById('openModal').click();
            }
          })

        }
        else if (this.resposta['Mensagem'] == 'Senha Incorreta!') {
          Swal.fire({
            title: 'Senha incorreta.',
            text: '',
            type: 'error',
            confirmButtonText: 'Tente novamente.',
            onClose: () => {

            }
          })
        }
        else {
          localStorage.setItem('token', JSON.stringify(this.resposta))
          this.router.navigate(['/aluno']);
        }
      })
  }
  clickPassword() {
    document.getElementById('sendPassword').click();
  }
  closeModalLogin(){
    document.getElementById('close-modal-login').click();
  }
  lgGoogle() {

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userGoogle) => {
        this.dataGooogle = userGoogle
        let url = `${this.apiRoot}/login/google`;
        this.http
          .post(url, this.dataGooogle)
          .subscribe(res => {
            this.closeModalLogin();
            localStorage.setItem('token', JSON.stringify(res));
            this.router.navigate(['/aluno']);
      })        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  lgLinkedin(){
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
      } 
      
      )}
  lgFacebook() {
    console.log("GET");
    let url = `${this.apiRoot}/login/facebook`;
    this.http
      .get(url)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res))
      })
  }
  signOut(): void {
    this.authService.signOut();
  }
  teste() {
    this.router.navigate(['/cadastro']);
  }

}
