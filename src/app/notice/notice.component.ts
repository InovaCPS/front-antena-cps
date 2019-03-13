import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  title = 'Editais - AntenaCPS'
  constructor(public titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle(this.title)
  }

}
