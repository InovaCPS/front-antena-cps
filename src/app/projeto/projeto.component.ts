import { Component } from '@angular/core';

import { projetoServices, Arquivo, Curso, Unidade, Categoria, Projeto } from './projeto.services';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto1.component.html',
  styleUrls: ['./projeto1.component.css'], 
  providers: [projetoServices]
})
export class ProjectComponent {
  
  projeto: Projeto;
  premiado: string;
  arquivos: Arquivo[];
  cursos: Curso[];
  unidades: Unidade[];
  unidadesEnvolvidas: Unidade[];
  cursosEnvolvidos: Curso[];
  exibirCategorias: boolean;
  categorias: Categoria[];

  constructor(private projetoServices: projetoServices){
    this.arquivos = [];
    this.unidadesEnvolvidas = [];
    this.cursosEnvolvidos = [];
    this.exibirCategorias = false;
    this.categorias = []
    this.cursos = [];
    this.projeto = { 
      titulo: "", 
      descricao: "", 
      unidades: this.unidadesEnvolvidas, 
      cursos: this.cursos, 
      palavrasChave: "", 
      colaboradores: "", 
      arquivos: this.arquivos,
      premiado: false, 
      links: ""
    }

    let categoriaDesign: Categoria = { nome: "design", valor: "dgn", checado: false }
    let categoriaAmbiente: Categoria = { nome: "ambiente", valor: "amb", checado: false }
    let categoriaGestao: Categoria = { nome: "gestão", valor: "ges", checado: false }
    let categoriaRobotica: Categoria = { nome: "robótica", valor: "rob", checado: false }
    let categoriaEducacao: Categoria = { nome: "educação", valor: "edu", checado: false }
    let categoriaTecnologia: Categoria = { nome: "tecnologia", valor: "tec", checado: false }
    let categoriaInfraestrutura: Categoria = { nome: "infraestrutura", valor: "inf", checado: false }
    let categoriaSaude: Categoria = { nome: "saude", valor: "sau", checado: false }

    this.categorias.push(categoriaDesign);
    this.categorias.push(categoriaAmbiente);
    this.categorias.push(categoriaGestao);
    this.categorias.push(categoriaRobotica);
    this.categorias.push(categoriaEducacao);
    this.categorias.push(categoriaTecnologia);
    this.categorias.push(categoriaInfraestrutura);
    this.categorias.push(categoriaSaude);

    // this.projetoServices.getCursos().subscribe((cursos: Curso[]) => {
    //   this.cursos = cursos;
    // });

    this.projetoServices.getUnidades().subscribe((unidades: Unidade[]) => {
      this.unidades = unidades;
    });
  }

  addArquivo(){
    if(this.arquivos.length < 3){
      let file: File;
      let newArquivo: Arquivo = { midia: file, nomeMidia: "", titulo: "", descricao: "", codigo: "" };
      this.arquivos.push(newArquivo);
    }
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
  
  exibirEsconderCategorias(){
    if(this.exibirCategorias == false){
      this.exibirCategorias = true;
    }
    else{
      this.exibirCategorias = false;
    }
  }

  alterarArquivo(event, index){
    this.projeto.arquivos[index].midia = <File>event.target.files[0]
    this.projeto.arquivos[index].nomeMidia = this.projeto.arquivos[index].midia.name;
  }

  cadastrarProjeto(){
    if(this.premiado == "1"){
      this.projeto.premiado = true;
    }
    else if(this.premiado == "2"){
      this.projeto.premiado = false;
    }

    console.clear();
    this.projetoServices.postProjeto(this.projeto);
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
}
