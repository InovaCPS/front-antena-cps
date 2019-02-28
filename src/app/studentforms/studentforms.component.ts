import { Component } from '@angular/core';

@Component({
  selector: 'app-studentforms',
  templateUrl: './studentforms.component.html',
  styleUrls: ['./studentforms.component.css']
})
export class StudentformsComponent {
  fundo = require('../images/fundo_transparente.png')

  nome: String;
  sobrenome: String;
  email: String;
  ra: String;
  gen: String;
  uni: String;
}