import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  title = 'Parceiros - AntenaCPS'

  constructor(public titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle(this.title)

  }

}
