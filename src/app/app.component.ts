import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public authService: AuthService) { }

 }
