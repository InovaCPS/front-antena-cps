import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing-page/landing.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProjectComponent} from './projeto/projeto.component';
import { AgendaComponent} from './agenda/agenda.component';
import { Agenda1Component} from './agenda/agenda1.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { StudentformsComponent} from './studentforms/studentforms.component';
import { ContactComponent } from './contact/contact.component';
import { NoticeComponent } from './notice/notice.component';
import { PartnersComponent } from './partners/partners.component';

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
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'agenda1',
    component: Agenda1Component
  },
  {
    path: 'perfil',
    component: StudentformsComponent
  },
  {
    path: 'collaborator',
    component: CollaboratorComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'notice',
    component: NoticeComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
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
