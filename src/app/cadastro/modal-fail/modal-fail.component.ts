import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-fail',
  templateUrl: './modal-fail.component.html',
  styleUrls: ['./modal-fail.component.css']
})
export class ModalFailComponent implements OnInit {
  hidden = true;
  show(){
    this.hidden = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
