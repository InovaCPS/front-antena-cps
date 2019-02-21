import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component'
import { LandingComponent } from './landing-page/landing.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProjectComponent} from './projeto/projeto.component';
import { AgendaComponent} from './agenda/agenda.component';
<<<<<<< HEAD
import { Agenda1Component} from './agenda/agenda1.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> d1d8f8cac9529544ab131cc86cbbcbbc0823e640

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
<<<<<<< HEAD
    Agenda1Component
=======
    NavbarComponent
>>>>>>> d1d8f8cac9529544ab131cc86cbbcbbc0823e640
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
