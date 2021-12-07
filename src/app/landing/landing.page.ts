import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(public auth: AuthService, private _router: Router) { }

  currentUser = null;
  ngOnInit() {
    this.currentUser = this.auth.user$
    console.log(this.currentUser)
    if(this.currentUser != null){
      this._router.navigate(['tabs'])
    }
  }
}
