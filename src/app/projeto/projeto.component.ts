import { Component } from '@angular/core';

import { projetoServices, Projeto, Arquivo } from './projeto.services';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjectComponent {
  
  arquivos: Arquivo[];

  constructor(){
    this.arquivos = [];
  }

  addArquivo(){
    if(this.arquivos.length < 3){
      let newArquivo: Arquivo = { midia: null, titulo: '', descricao: '', codigo: '' };
      this.arquivos.push(newArquivo);
    }
  }

  deleteArquivo(index){
    this.arquivos.splice(index, 1);
  }

  logo = require('../../app/images/antena_cps.jpg')
  upload = require('../../app/images/upload.png')
  imag = require('../../app/images/imag.png')
  escudo = require('../../app/images/escudo.png')
  adfile = require('../../app/images/adfile.png')
  plus = require('../../app/images/plus.jpg')
  fundo = require('../../app/images/fundo.jpg')
  friends = require('../../app/images/amigos.png')
  back = require('../../app/images/atras.jpg')
}
