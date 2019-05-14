import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocaleDayPeriods } from '@angular/common';

@Injectable()
export class projetoServices{
    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
    headers;
    token;

    constructor(private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }

    postProjeto(projeto: Projeto){
        var fd = new FormData();

        projeto.arquivos.forEach(arquivo => {
            fd.append(arquivo.midia.name, arquivo.midia);
        });

        fd.append('projeto', JSON.stringify(projeto))

        return this.http.post(`${this.apiRoot}/cp/projetos`, fd, {headers: new HttpHeaders({
            'token': this.token.token
        })}).subscribe(res => console.log("Cadastrado com Sucesso!!!"))
    }

    getUnidades(){
        return this.http.get(`${this.apiRoot}/cp/unidades`, {headers: new HttpHeaders({
            'token': this.token.token
        })})
    }

    getCursos(){
        return this.http.get(`${this.apiRoot}/cp/cursos`, {headers: new HttpHeaders({
            'token': this.token.token
        })})
    }


}



export interface Projeto{
    titulo: string;
    descricao: string;
    unidades: Unidade[];
    cursos: Curso[];
    palavrasChave: string[];
    colaboradores: string[];
    arquivos: Arquivo[], 
    premiado: boolean;
    links: string[];
}

export interface Arquivo{
    midia: File;
    nomeMidia: string;
    titulo: string;
    descricao: string;
    codigo: string;
}

export interface Curso{
    id: number;
    nome: string;
}

export interface Unidade{
    id: number;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    id_regioes: string;
}

export interface Categoria{
    nome: string;
    valor: string;
    checado?: boolean;    
}

export interface Coop {
    email: string;
}