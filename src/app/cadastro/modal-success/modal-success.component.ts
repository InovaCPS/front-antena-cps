import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {
  hidden = true;
  show(){
    this.hidden = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
