import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AgendaComponent, NgbdModalContent } from './agenda/agenda.component';
import { Agenda1Component } from './agenda/agenda1.component';
import { AppRoutingModule } from './app-routing.module';
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
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig],
  entryComponents: [AgendaComponent, NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
