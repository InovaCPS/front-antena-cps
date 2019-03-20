import Swal from 'sweetalert2';

import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
    resposta: string;
    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";

    logo = require('../../app/images/antena_logo.png')

    model: any = {};

    constructor(private http: HttpClient, private router: Router) {}

    doPOST() {
        console.log("POST");
        let url = `${this.apiRoot}/login`;
        this.http
          .post(url, { username: this.model.email, password: this.model.password })
          .pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
          .subscribe(res =>{
            this.resposta = res['Mensagem'];
            if(this.resposta == 'Não foi possivel verificar'){
              Swal.fire({
                title: 'Erro!',
                text: 'Email ou senha inválidos.',
                type: 'error',
                confirmButtonText: 'OK.'
              })
            }
            else{
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
