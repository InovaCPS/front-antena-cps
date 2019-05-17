import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { projetoServices, Arquivo, Curso, Unidade, Categoria, Projeto, Coops } from './projeto.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto1.component.html',
  styleUrls: ['./projeto1.component.css'], 
  providers: [projetoServices]
})

export class ProjectComponent {
  
  model: any = {} ;
  resposta : any;
  apiRoot: string = 'http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com';
  projeto: Projeto;
  premiado: string = "";
  arquivos: Arquivo[];
  palavrasChave: string = "";
  colaboradores: string = "";
  links: string = "";

  unidades: Unidade[];
  unidadesEnvolvidas: Unidade[];

  cursos: Curso[];
  cursosEnvolvidos: Curso[];
  exibirCategorias: boolean = false;
  categorias: Categoria[];

  token;

  coops: Coops[];

  constructor(
    private projetoServices: projetoServices,
    private router: Router,
    private http: HttpClient){
      this.coops = [];
      this.arquivos = [];
      this.projeto = { 
        titulo: "",
        descricao: "",
        orientador: "",
        status: "",
        tipo: "",
        tema: "",
        coops: this.coops,
        textoProjeto: "",
        linkTexto: "",
        arquivos: this.arquivos
      }
      this.token = JSON.parse(localStorage.getItem('token'));
    }

  addArquivo(parametro){
    //if(this.arquivos.length < 3){
      let newArquivo: Arquivo = { tipo: parametro, titulo: this.model.titulo, legenda: this.model.legenda, caminho: this.model.caminho };
      this.arquivos.push(newArquivo);
      console.log(this.arquivos)
      console.log(parametro)
    //}
  }

  urlDestino(index){
    window.open('//' + index);
  }
  
  addCoops(){
    if(this.coops.length < 3){
      let newCoop: Coops = { email: "", unidade:"", curso:"" };
      this.coops.push(newCoop);
    }
  }

  fechar() {
    this.router.navigate(['/aluno']);
  }

  deleteArquivo(index){
    this.arquivos.splice(index, 1);
    console.log(this.arquivos);
  }

  addUnidade(){
    let newUnidade: Unidade;
    this.unidadesEnvolvidas.push(newUnidade);
  }

  deleteUnidade(index){
    this.unidadesEnvolvidas.splice(index, 1);
  }

  addCurso(){
    let newCurso: Curso;
    this.cursosEnvolvidos.push(newCurso);
  }

  deleteCurso(index){
    this.cursosEnvolvidos.splice(index, 1);
  }

  postProject(){
    console.log("POST");

    console.log(this.projeto);

    /*let url = `${this.apiRoot}/cp/projetos`;
    this.http
     .post(url, this.model.datajson,{headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => 
      console.log(res["Mensagem"])
    )*/
  }


  deleteCoop(index) {
    this.coops.splice(index, 1)
  }

  upload = require('../../app/images/upload.png')
  imag = require('../../app/images/imag.png')
  escudo = require('../../app/images/escudo.png')
  adfile = require('../../app/images/adfile.png')
  plus = require('../../app/images/plus.jpg')
  divide = require('../../app/images/divide.png')
  fundo = require('../../app/images/fundo.jpg')
  friends = require('../../app/images/amigos.png')
  back = require('../../app/images/atras.jpg')
  adicionarImagem = require("../../assets/addImg.png")
  delCode = require('../../app/images/delCode.png')
  viewCode = require('../../app/images/viewCode.png')
  addCode = require('../../app/images/adicionar.png')
}

$(document).ready(function() {
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  $('#myModal').on('shown.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc + "?autoplay=1&modestbranding=1&showinfo=0" ); 
  })
  $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
  }) 
  });
  
  
  