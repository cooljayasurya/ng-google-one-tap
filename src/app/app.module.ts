import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgGoogleOneTapModule } from 'ng-google-one-tap';
// import { NgGoogleOneTapModule } from '../../projects/ng-google-one-tap/src/lib/ng-google-one-tap.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGoogleOneTapModule.config( {
      client_id: '845404307552-d5l9gdh9pc1332afcb6la7usp65mg57e.apps.googleusercontent.com',
      cancel_on_tap_outside: false,
      authvalidate_by_googleapis: true,
      auto_select: false,
      disable_exponential_cooldowntime: false,
      context: 'signup'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
