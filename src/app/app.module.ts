import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AgendaComponent, NgbdModalContent } from './agenda/agenda.component';
import { Agenda1Component } from './agenda/agenda1.component';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing-page/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './projeto/projeto.component';
import { StudentformsComponent } from './studentforms/studentforms.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RegEventComponent } from './reg-event/reg-event.component';
import { ContactComponent } from './contact/contact.component';
import { NoticeComponent } from './notice/notice.component';
import { PartnersComponent } from './partners/partners.component';
import { MustMatchDirective } from './cadastro/_helpers/must-match.directive';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { RePasswordComponent } from './cadastro/re-password/re-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
    component: CadastroComponent,
    data: {tittle: 'Cadastro'}   
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
    component: StudentformsComponent
  },
  {
    path: 'notice',
    component: NoticeComponent
  },
  {
    path: 'release_notes',
    component: ReleaseNotesComponent
  },
  {
    path: 'change-password/:token',
    component: ChangePasswordComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    FooterComponent,
    ContentComponent,
    ProfileComponent,
    LandingComponent,
    CadastroComponent,
    AboutComponent,
    CarouselComponent,
    ProjectComponent,
    AgendaComponent,
    Agenda1Component,
    NavbarComponent,
    StudentformsComponent,
    NgbdModalContent,
    RegEventComponent,
    CollaboratorComponent,
    ContactComponent,
    NoticeComponent,
    PartnersComponent,
    MustMatchDirective,
    ReleaseNotesComponent,
    RePasswordComponent,
    ChangePasswordComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true, useHash: true }
    ),
    NgbModule,
    SwiperModule
  ],
  providers:[NgbCarouselConfig, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, 
    Title],
  entryComponents: [AgendaComponent, NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
