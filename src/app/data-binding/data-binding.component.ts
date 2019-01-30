
import { Component } from "@angular/core";
import { map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
    apiRoot: string = "http://localhost:8080";

    logo = require('../../app/images/antena_cps.jpg')
    usrn: String;
    pswd: String;

    constructor(private http: HttpClient) {}

    doPOST() {
        console.log("POST");
        let url = `${this.apiRoot}/login`;
        this.http
          .post(url, { username: this.usrn, password: this.pswd })
          .pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
          .subscribe(res => console.log("Bem Vindo!!!"))    
          
    }

    lgGoogle(){
        console.log("GET");
        let url = `${this.apiRoot}/login/google`;
        this.http
          .get(url)
          .subscribe(res => console.log(res))
    }
}

  'O codigo de login com o google esta dando problema no CORS... como sempre!!!! kkkkkkkk'