import { Component } from '@angular/core';
import { FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  constructor(private fb: FacebookService) {
 
    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
 
  }

  logo = require('../../app/images/logo1-02.png')

}
