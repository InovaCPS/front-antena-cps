import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
    resposta: any;
    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";

    logo = require('../../app/images/antena_logo.png')

    model: any = {};

    constructor(private http: HttpClient, private router: Router) {}
    onSubmit(){
      this.doPOST();
    }
    doPOST() {
        console.log("POST");
        let url = `${this.apiRoot}/login`;
        this.http
          .post(url, { username: this.model.email, password: this.model.password })
          .subscribe(res =>{
            this.resposta = res;
            if(this.resposta['Mensagem'] == 'Não foi possivel verificar'){
              Swal.fire({
                title: 'Email nao cadastrado.',
                text: '',
                type: 'error',
                confirmButtonText: 'Faça cadastro.',
                onClose: () => {
                    
                }
              })
            }
            else if(this.resposta['Mensagem'] == 'Senha Incorreta!'){
              Swal.fire({
                title: 'Senha incorreta.',
                text: '',
                type: 'error',
                confirmButtonText: 'Tente novamente.',
                onClose: () => {
                    
                }
              })
            }
            else{
              console.log("email senha certa")
              localStorage.setItem('token', JSON.stringify(this.resposta))
              this.router.navigate(['/aluno']);    
            }
          })
 
          
    }

    lgGoogle(){
        console.log("GET");
        let url = `${this.apiRoot}/login/google`;
        this.http
          .get(url)
          .subscribe(res => console.log(res))
    }
}
