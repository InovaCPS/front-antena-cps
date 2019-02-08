import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class profileService{
    apiRoot: string = "http://localhost:8080";
    headers;
    token;

    constructor(private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }

    getUserId(){
        return this.http.get(`${this.apiRoot}/cp/getId`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }

    getProfileAluno(id){
        return this.http.get(`${this.apiRoot}/cp/aluno/${id}`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
}

export interface Aluno{
    ra: string;
    nome: string;
    sobrenome: string;
    email?: string;
    cpf?: string;
    rg?: string;
    foto_perfil?: string;
    dt_nascimento?: string;
    genero?: string;
    telefone?: string;
    local_trabalho?: string;
    cargo?: string;
    lattes?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    escola?: string;
    escola_unidade?: string;
    idade?: string;
}