import { Component } from '@angular/core';
import { profileService, Aluno } from '../profile/profile.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-studentforms',
  templateUrl: './studentforms.component.html',
  styleUrls: ['./studentforms.component.css'],
  providers: [profileService]

})
export class StudentformsComponent {
    fundo = require('../images/fundo_transparente.png')
    face = require('../images/fb.png')
    yout = require('../images/youtube.png')
    twt = require('../images/twitter.png')
    link = require('../images/linkedin.png')
    datajson;
    aluno: Aluno;
    apiRoot: string = "http://localhost:8080";

    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    ra: string;
    escola: string;
    rg: string;
    cpf: string;
    cargo: string;
    local_trabalho: string;
    foto_perfil: string;
    dt_nascimento: string;
    lattes: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    token;

    // adfile = require('../../app/images/adfile.png')

    constructor(private profileService: profileService, private http: HttpClient){
        this.profileService.getUserId().subscribe(res => {
          this.profileService.getProfileAluno(res['id']).subscribe((aluno: Aluno) => {
            this.aluno = aluno; 
            this.nome = this.aluno.nome;  
            this.sobrenome = this.aluno.sobrenome;
            this.email = this.aluno.email;
            this.telefone = this.aluno.telefone;
            this.ra = this.aluno.ra,
            this.escola = this.aluno.escola,
            this.rg = this.aluno.rg,
            this.cpf = this.aluno.cpf,
            this.cargo = this.aluno.cargo,
            this.local_trabalho = this.aluno.local_trabalho, 
            this.foto_perfil = this.aluno.foto_perfil,
            this.dt_nascimento = this.aluno.dt_nascimento,
            this.lattes = this.aluno.lattes,
            this.facebook = this.aluno.facebook,
            this.linkedin = this.aluno.linkedin,
            this.twitter = this.aluno.twitter,
            this.youtube = this.aluno.youtube      
          });
          this.token = JSON.parse(localStorage.getItem('token'));
        })
      }

      doPUT() {
        console.log("PUT");
        let url = `${this.apiRoot}/cp/parceiro`;
        this.datajson ={ 
          nome: this.nome, 
          sobrenome: this.sobrenome, 
          email: this.email, 
          telefone: this.telefone,
          ra: this.ra,
          escola: this.escola,
          rg: this.rg,
          cpf: this.cpf,
          cargo: this.cargo,
          local_trabalho: this.local_trabalho,   
          foto_perfil: this.foto_perfil,
          dt_nascimento: this.dt_nascimento,
          lattes: this.lattes,
          facebook: this.facebook,
          linkedin: this.linkedin,
          twitter: this.twitter,
          youtube: this.youtube
        }
        console.log(this.datajson);
        this.http
          .put(url, this.datajson,{headers: new HttpHeaders({'token': this.token.token})})
          .subscribe(res => console.log(res["Mensagem"]))         
      }
    

}