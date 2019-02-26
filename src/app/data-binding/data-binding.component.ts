
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

    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";

    logo = require('../../app/images/antena_logo.png')
    usrn: String;
    pswd: String;

    constructor(private http: HttpClient, private router: Router) {}

    doPOST() {
        console.log("POST");
        let url = `${this.apiRoot}/login`;
        this.http
          .post(url, { username: this.usrn, password: this.pswd })
          .pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
          .subscribe(res => console.log("Bem Vindo!!!"))
          this.router.navigate(['/aluno']);    
          
    }

    lgGoogle(){
        console.log("GET");
        let url = `${this.apiRoot}/login/google`;
        this.http
          .get(url)
          .subscribe(res => console.log(res))
    }
}
