import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { ProfileComponent } from './profile/profile.component';

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("Facebook-App-Id")
//   },
//   {
//     id: LinkedInLoginProvider.PROVIDER_ID,
//     provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
//   }
// ]);
 
// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    FooterComponent,
    ContentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SocialLoginModule
  ],
  // providers: [    {
  //   provide: AuthServiceConfig,
  //   useFactory: provideConfig
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
