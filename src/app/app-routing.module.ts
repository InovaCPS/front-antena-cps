import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing-page/landing.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {ProjectComponent} from './projeto/projeto.component';
 
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
      path: 'aluno',
      component: ProfileComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent     
  },   
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projeto',
    component: ProjectComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
