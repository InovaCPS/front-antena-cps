import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class projetoServices{
    apiRoot: string = "http://localhost:8080";
    headers;
    token;

    constructor(private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }

    postProjeto(arquivos: File[], projeto: Projeto){
        const fd = new FormData();

        fd.append('projeto', JSON.stringify(projeto));

        arquivos.forEach(arquivo => {
            fd.append('arquivo', arquivo, arquivo.name);
        });

        return this.http.post(`${this.apiRoot}/cp/projetos`, fd, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
}

export interface Projeto{
    titulo: string;
    descricao: string;
    unidades: number[];
    cursos: number[];
    palavrasChave: string[];
    colaboradores: string[];
    arquivos: Arquivo[], 
    premiado: boolean;
    links: string[];
}

export interface Arquivo{
    midia: File;
    titulo: string;
    descricao: string;
    codigo: string;
}