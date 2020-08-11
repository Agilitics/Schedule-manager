import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
  async initGoogleAuth(): Promise<void> {
    
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: 'YOUR_GOOGLE_KEY' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }
  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

  
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }
    async checkIfUserAuthenticated(): Promise<boolean> {
    
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }
  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }

