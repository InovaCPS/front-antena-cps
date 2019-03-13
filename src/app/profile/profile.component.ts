import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

import { profileService, Aluno } from './profile.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
  providers: [profileService]
})
export class ProfileComponent implements OnInit {

  title = 'Perfil - AntenaCPS'
  aluno: Aluno;
  fotoPerfil: string;

  constructor(private profileService: profileService,
              public titleService: Title){
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
    })
  }
  
  bg = require('../../app/images/profile-bg.jpg')
  profile = require('../../app/images/profile-pic.jpg')
  shield = require('../../app/images/escudo.png')
  calendar = require('../../app/images/calendario.png')
  friends = require('../../app/images/amigos.png')
  test = require('../../app/images/behance.png')  
  fb = require('../../app/images/fb.png')
  tw = require('../../app/images/twitter.png')
  li = require('../../app/images/linkedin.png')
  yt = require('../../app/images/youtube.png')

  ngOnInit(){

    this.titleService.setTitle(this.title)

  }

}
