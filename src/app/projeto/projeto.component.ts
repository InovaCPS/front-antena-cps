import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { projetoServices, Arquivo, Curso, Unidade, Categoria, Projeto, Coops, Categ, Colab, Premios, Recursos, Direitos, Creditos } from './projeto.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto1.component.html',
  styleUrls: ['./projeto1.component.css'], 
  providers: [projetoServices]
})

export class ProjectComponent {

  ngOnInit() {
    this.addLine1();
    this.addLine2();
    this.addLine3();
  }
  model: any = {} ;
  resposta : any;
  apiRoot: string = 'http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com';
  projeto: Projeto[];
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

  categ: Categ[];
  colab: Colab[];
  recursos: Recursos[];
  premios: Premios [];
  direitos: Direitos [];
  creditos: Creditos[];

  constructor(
    private projetoServices: projetoServices,
    private router: Router,
    private http: HttpClient){
      this.coops = [];
      this.arquivos = [];
      this.projeto = [];
      this.token = JSON.parse(localStorage.getItem('token'));
    }

  addArquivo(parametro){
      let newArquivo: Arquivo = { tipo: parametro, titulo: this.model.titulo, legenda: this.model.legenda, caminho: this.model.caminho };
      this.arquivos.push(newArquivo);
      console.log(this.arquivos)
      this.desabilitar();
  }

  addProjeto() {
    const newProjeto: Projeto = { titulo: '', descricao: '', orientador: '', status: '', tipo: '',
    tema: '', coops: this.coops, textoProjeto: this.model.textoProjeto, linkTexto: this.model.linkTexto, arquivos: this.arquivos };
    this.projeto.push(newProjeto);
    console.log(this.projeto);
  }

  desabilitar() {
    document.getElementById('t1').setAttribute('disabled', 'disabled');
    document.getElementById('t2').setAttribute('disabled', 'disabled');
    document.getElementById('t3').setAttribute('disabled', 'disabled');
    document.getElementById('iCode').setAttribute('disabled', 'disabled');
  }

  limpar() {
    this.model.titulo = ''; this.model.legenda = ''; this.model.caminho = '';
    document.getElementById('t1').removeAttribute('disabled');
    document.getElementById('t2').removeAttribute('disabled');
    document.getElementById('t3').removeAttribute('disabled');
  }

  urlDestino(index){
    window.open('//' + index);
  }

  addCoops(){
      let newCoop: Coops = { email: "", unidade:"", curso:"" };
      this.coops.push(newCoop);
  }

  addLine1(){
    if (this.categ.length < 3 || this.colab.length < 3 ){
      let newCateg: Categ = { desc: ""};
      let newColab: Colab = { desc: ""};

      this.colab.push(newColab);
      this.categ.push(newCateg);
    }
  }

  deleteLine1(index){
    this.colab.splice(index, 1);
    this.categ.splice(index, 1);
  }

  addLine2(){
    if (this.recursos.length < 3 || this.premios.length < 3 ){
      let newRecursos: Recursos = { desc: ""};
      let newPremios: Premios = { desc: ""};

      this.recursos.push(newRecursos);
      this.premios.push(newPremios);
    }
  }

  deleteLine2(index){
    this.recursos.splice(index, 1);
    this.premios.splice(index, 1);
  }

  addLine3(){
    if (this.direitos.length < 3 || this.creditos.length < 3 ){
      let newDireitos: Direitos = { desc: ""};
      let newCreditos: Premios = { desc: ""};

      this.direitos.push(newDireitos);
      this.creditos.push(newCreditos);
    }
  }

  deleteLine3(index){
    this.direitos.splice(index, 1);
    this.creditos.splice(index, 1);
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
  addCode = require('../../app/images/addCode.png')
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

  
  
  
  