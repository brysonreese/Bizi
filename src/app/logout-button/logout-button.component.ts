import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { tap } from 'rxjs/operators';

/* const returnTo = `${config.appId}://dev-97u60mud.us.auth0.com/capacitor/${config.appId}/callback`; */
const returnTo = `http://localhost:8100/`

@Component({
  selector: 'app-logout-button',
  template: `<ion-button (click)="logout()">Log out</ion-button>`,
})
export class LogoutButtonComponent {
  constructor(public auth: AuthService) {}

   logout() {
    this.auth
      .buildLogoutUrl({ returnTo })
      .pipe(
        tap((url) => {
          this.auth.logout({ localOnly: true });
          Browser.open({ url });
        })
      )
      .subscribe();
  }
}