import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import auth types from auth-0 sdk
import { AuthModule } from '@auth0/auth0-angular';
import config from '../../capacitor.config';

// Build the URL that Auth0 should redirect back to
/* const redirectUri = `${config.appId}://dev-97u60mud.us.auth0.com/capacitor/${config.appId}/callback`; */
const redirectUri = `http://localhost:8100/tabs`;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            AuthModule.forRoot({
              domain: "dev-97u60mud.us.auth0.com",
              clientId: "eJxYhzarruu9tdCxi963cN7G4CdJ08lC",
              redirectUri
            }),
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
