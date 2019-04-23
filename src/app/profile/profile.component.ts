import { HttpClient,HttpHeaders } from '@angular/common/http';

import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { profileService, Aluno } from './profile.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
  providers: [profileService]
})
export class ProfileComponent implements OnInit {

  token;
  title = 'Perfil - AntenaCPS'
  aluno: Aluno;
  fotoPerfil: string;
  apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
  resposta: any;
  constructor(private profileService: profileService,
              public titleService: Title,
              private http: HttpClient){
    this.profileService.getUserId().subscribe(res => {
      this.profileService.getProfileAluno(res['id']).subscribe((aluno: Aluno) => {
        this.aluno = aluno;
        if(aluno.foto_perfil){
          this.fotoPerfil = require('CAMINHO DO BUCKET' + aluno.foto_perfil);
        }
        else{
          this.fotoPerfil = require('../../app/images/profile-pic.jpg');
        }
      });
      this.token = JSON.parse(localStorage.getItem('token'));
    })
  }


  //bg = require('../../assets/background_4k.jpg')
  profile = require('../../app/images/profile-pic.jpg')
  shield = require('../../assets/iconPROJ.png')
  calendar = require('../../assets/iconEVENT.png')
  friends = require('../../assets/iconXP.png')
  trof = require('../../assets/iconAWARDS.png')
  github = require('../../assets/iconGithub.png')  
  facebook = require('../../assets/iconFacebook.png')
  twitter = require('../../assets/iconTwitter.png')
  linkedin = require('../../assets/iconLinkedin.png')
  youtube = require('../../assets/iconYoutube.png')
  instagram = require('../../assets/iconInstagram.png')

  imgTeste = require("../../assets/imgTeste.jpg")
  addImg = require("../../assets/addImg.png")

  Agree: boolean = true;

  ableButton: boolean = true;
  changeCheck(event){
    this.ableButton = !event.target.checked;
  }

 
  submitTerms(){
    // let url = `${this.apiRoot}/cp/parceiro/termo`
    // this.http.put(url, { termos: this.Agree},{headers: new HttpHeaders({'token': this.token.token})})
    // .subscribe( res => {
    //   console.log(res)
    // })
    document.getElementById('buttonPopover').click();
  }

  logOff(){
    localStorage.removeItem('token');
  }

  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.profileService.getUserId().subscribe(res => {
      this.profileService.getProfileAluno(res['id']).subscribe((aluno: Aluno) => {
        this.aluno = aluno;
        if(aluno.termos != "True"){
          document.getElementById('openModalFirst').click();
        }
      });
    })
  }
}
