import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  logo = require('../../app/images/antena_logo.png');
  iconAlert = require('../../assets/alertIcon.png');
  iconMsg = require('../../assets/msgIcon.png');

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const black = '#001e36';
    const transparent =  'transparent';

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number == 0) {
      document.getElementById('navbar').style.backgroundColor = transparent;

    } else if(number > 200) {
        document.getElementById('navbar').style.backgroundColor = black ;
    }

  }
  logOff() {
    this.router.navigate(['/']);
  }
}
