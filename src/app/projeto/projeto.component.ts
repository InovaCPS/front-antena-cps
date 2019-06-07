import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { projetoServices, Arquivo, Curso, Unidade, Categoria, Projeto, Coops, Categ, Colab, Premios, Recursos, Direitos, Creditos} from './projeto.services';
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
  projeto: Projeto[];
  premiado: string = "";
  arquivos: Arquivo[];
  palavrasChave: string = "";
  colaboradores: [object] ;
  links: string = "";

  unidades: Unidade[];
  unidadesEnvolvidas: Unidade[];

  cursos: Curso[];
  cursosEnvolvidos: Curso[];
  exibirCategorias: boolean = false;
  categorias: Categoria[];
  user = JSON.parse(localStorage.getItem('userInfo'));
  token;

  coops: Coops[];

  categ: Categ[];
  colab: Colab[];
  recursos: Recursos[];
  premios: Premios [];
  direitos: Direitos [];
  creditos: Creditos[];
  detalhes: {
    categoria1: string,
    categoria2: string,
    premio1: string,
    premio2: string,
    recurso1: string,
    recurso2: string,
    credito1: string,
    credito2: string,
    direitos: string
   };

  constructor(
    private projetoServices: projetoServices,
    private router: Router,
    private http: HttpClient){
      this.coops = [];
      this.arquivos = [];
      this.projeto = [];
      this.token = JSON.parse(localStorage.getItem('token'));
      this.premios = [];
      this.categ = [];
      this.colab = [];
      this.recursos = [];
      this.direitos = [];
      this.creditos = [];
      this.detalhes = {
        categoria1: "",
        categoria2: "",
        premio1: "",
        premio2: "",
        recurso1: "",
        recurso2: "",
        credito1: "",
        credito2: "",
        direitos: ""
       };
      this.colaboradores = [
        {"email": this.user.email}
      ]
    }

  addArquivo(parametro){
    let newArquivo: Arquivo = { tipo: parametro, titulo: this.model.titulo, legenda: this.model.legenda, caminho: this.model.caminho };
    this.arquivos.push(newArquivo);
    console.log(this.arquivos);
  }

  addProjeto() {
    const newProjeto: Projeto = { titulo: '', descricao: '', orientador: '', status: '', tipo: '',
    tema: '', coops: this.coops, textoProjeto: this.model.textoProjeto, linkTexto: this.model.linkTexto, arquivos: this.arquivos };
    this.projeto.push(newProjeto);
    console.log(this.projeto);
  }

  desabilitarImg(){
    document.getElementById('i1').setAttribute('disabled', 'disabled');
    document.getElementById('i2').setAttribute('disabled', 'disabled');
    document.getElementById('i3').setAttribute('disabled', 'disabled');
    document.getElementById('iImg').setAttribute('disabled', 'disabled');
  }

  limparImg(){
    this.model.titulo = ''; this.model.legenda = ''; this.model.caminho = '';
    document.getElementById('i1').removeAttribute('disabled');
    document.getElementById('i2').removeAttribute('disabled');
    document.getElementById('i3').removeAttribute('disabled');
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

  addColab(){
    document.getElementById('line1').style.display = "block";
    document.getElementById('colab2').style.display = "block";
    document.getElementById('trashColab').style.display = "block";
  }

  delColab(){
   
  }

  addCateg(){
    document.getElementById('line1').style.display = "block";
    document.getElementById('cat2').style.display = "block";
    document.getElementById('trashCat').style.display = "block";
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

  dsbltSalvar(mdl, btn) {
    let v: any;
    for (let i = 0, len = this.arquivos.length; i < len; i++) {
      if (this.arquivos[i].tipo === mdl) { v = mdl; }
    }
    if (v === mdl) {
      document.getElementById(btn).removeAttribute('disabled');
      return true;
    } else {
      document.getElementById(btn).setAttribute('disabled', 'disabled');
    }
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
  viewMidia = require('../../app/images/vidMidia.png')

  addDetails(){
    alert("entro");
    for (let index = 0; index < this.categ.length; index++) {
      alert("entro no for");
      if (index == 0 ){
        this.detalhes.categoria1 = this.categ[index].desc;
        this.detalhes.credito1 = this.creditos[index].desc;
        this.detalhes.premio1 = this.premios[index].desc;
        this.detalhes.recurso1 = this.recursos[index].desc;
        this.detalhes.direitos = this.direitos[index].desc;
        alert('primeiro if');
      }
      if (index == 1 ){
        if ( this.categ[index].desc != undefined ){
          this.detalhes.categoria2 = this.categ[index].desc;
        }
        else {
          this.detalhes.categoria2 = "";
        }
        if ( this.creditos[index].desc != undefined ){
          this.detalhes.credito2 = this.creditos[index].desc;
        }
        else {
          this.detalhes.credito2 = "";
        }
        if ( this.premios[index].desc != undefined ){
          this.detalhes.premio2 = this.premios[index].desc;
        }
        else {
          this.detalhes.premio2 = "";
        }
        if ( this.recursos[index].desc != undefined ){
          this.detalhes.recurso2 = this.recursos[index].desc;
        }
        else {
          this.detalhes.recurso2 = "";
        }
        if ( this.direitos[index].desc != undefined ){
          this.detalhes.direitos = this.direitos[index].desc;
        }
        else {
          this.detalhes.direitos = "";
        }
      }
      alert('resetando valor');
    }
    console.log(JSON.stringify(this.detalhes));
    alert('resetando array');
  }
}

$(document).ready(function() {
  var $videoSrc; 
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( 'src' );
  });
  console.log($videoSrc);
  $('#myModal').on('shown.bs.modal', function (e) {
  $('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0' );
  })
  $('#myModal').on('hide.bs.modal', function (e) {
      $('#video').attr('src', $videoSrc);
  })
  });
