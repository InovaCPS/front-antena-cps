import { Component } from '@angular/core';
import { profileService, Aluno } from '../profile/profile.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



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
    logoFacebook = require('../../assets/facebook-logo.png');
    logoTwitter = require('../../assets/twitter-logo.png');
    logoLinkedin = require('../../assets/linkedin-logo.png');
    logoGoogle = require('../../assets/google-logo.png');
    logoPinterest = require('../../assets/pinterest-logo.png');
    logoGithub = require('../../assets/github-logo.png');
    logoInstagram = require('../../assets/instagram-logo.png');
    logoYoutube = require('../../assets/youtube-logo.png');

    datajson;
    aluno: Aluno;
    
    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";

    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    RA: string;
    matricula: string;
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
    genero: string;
    senha: string;
    token;

    

    // adfile = require('../../app/images/adfile.png')

    constructor(private profileService: profileService, private http: HttpClient, private router: Router){
        this.profileService.getUserId().subscribe(res => {
          this.profileService.getProfileAluno(res['id']).subscribe((aluno: Aluno) => {
            this.aluno = aluno; 
            this.nome = this.aluno.nome;  
            this.sobrenome = this.aluno.sobrenome;
            this.genero = this.aluno.genero;
            this.email = this.aluno.email; 
            this.senha = "1234";
            this.telefone = this.aluno.telefone;
            this.RA = this.aluno.ra,
            this.matricula = "",
            this.escola = this.aluno.escola,
            this.rg = this.aluno.rg,
            this.cpf = this.aluno.cpf,
            this.cargo = this.aluno.cargo,
            this.local_trabalho = this.aluno.local_trabalho, 
            this.foto_perfil = "",
            this.dt_nascimento = '',
            this.lattes = "",
            this.facebook = "",
            this.linkedin = "",
            this.twitter = ""
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
          senha: this.senha, 
          telefone: this.telefone,
          genero: this.genero,
          matricula: this.matricula,
          RA: this.RA,
          unidade: 1,
          rg: this.rg,
          cpf: this.cpf,
          cargo: this.cargo,
          local_trabalho: this.local_trabalho,   
          foto_perfil: this.foto_perfil,
          dt_nascimento: this.dt_nascimento,
          lattes: this.lattes,
          facebook: this.facebook,
          linkedin: this.linkedin,
          twitter: this.twitter
        }
        console.log(this.datajson);
        this.http
          .put(url, this.datajson,{headers: new HttpHeaders({'token': this.token.token})})
          .subscribe(res => console.log(res["Mensagem"]))
          this.router.navigate(['/aluno']); 
          'window.location.reload()'  
      }
    

}