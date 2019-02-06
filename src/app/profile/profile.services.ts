import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class profileService{
    apiRoot: string = "http://localhost:8080";
    headers;

    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({
            "Content-type": "application/json; charset=UTF-8", 
            "token": localStorage.getItem('token')
        })
    }

    getUserId(){
        console.log(this.headers);
        return this.http.get(`${this.apiRoot}/cp/getId`, this.headers);
    }

    getProfileAluno(id){
        return this.http.get(`${this.apiRoot}/cp/aluno/${id}`);
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
}