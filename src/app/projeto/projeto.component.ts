import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { projetoServices, Arquivo, Curso, Unidade, Categoria, Projeto, Coop } from './projeto.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto1.component.html',
  styleUrls: ['./projeto1.component.css'], 
  providers: [projetoServices]
})

export class ProjectComponent {
  ngOnInit() {
    this.addCoop();
  }
  mailDu = "edu@hotmail.com"
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

  coops: Coop[];

  constructor(
    private projetoServices: projetoServices,
    private router: Router,
    private http: HttpClient){
      this.token = JSON.parse(localStorage.getItem('token'));
    }

  addArquivo(){
    if(this.arquivos.length < 3){
      let file: File;
      let newArquivo: Arquivo = { midia: file, nomeMidia: "", titulo: "", descricao: "", codigo: "" };
      this.arquivos.push(newArquivo);
    }
  }

  fechar() {
    this.router.navigate(['/aluno']);
  }

  deleteArquivo(index){
    this.arquivos.splice(index, 1);
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

    this.model.datajson = {
      titulo: this.model.titulo,
      orientador: this.model.orientador,
      descricao: this.model.descricao,
      status: this.model.status,
      tipo: this.model.tipo,
      tema: this.model.tema,
      coops: [ 
        {"email": this.mailDu},
         {"email":this.model.coop}
      ],
      textoProjeto: this.model.textoProjeto,
      linkTexto: this.model.linkTexto,
      imagens: this.model.imagens,
      tituloImagem: this.model.tituloImagem,
      legendaImagem: this.model.legendaImagem,
      tituloCodigo: this.model.tituloCodigo,
      subtituloCodigo: this.model.subtituloCodigo,
      linkCodigo: this.model.linkCodigo

    };
      console.log(this.model.datajson);

    let url = `${this.apiRoot}/cp/projetos`;
    this.http
     .post(url, this.model.datajson,{headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => 
      console.log(res["Mensagem"])
    )
  }

  addCoop() {
    let newCoop: Coop = {email: ""};
    this.coops.push(newCoop);
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

}

$(document).ready(function() {
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  $('#myModal').on('shown.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
  $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
  }) 
  });
  
  
  