import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importação do componentes/modulos do app

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ROUTES } from './app.route';
import { ResultsComponent } from './results/results.component';

import { ResultsDetailComponent } from './results/results-detail/results-detail.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

// Configuração do Angular Materials

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

// Configuração do firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';


const config = {
  apiKey: 'AIzaSyDwyzTb5W7t3UkFLBQSdeQHX7r3BW_dU7I',
  authDomain: 'extrahour480.firebaseapp.com',
  databaseURL: 'https://extrahour480.firebaseio.com',
  projectId: 'extrahour480',
  storageBucket: 'extrahour480.appspot.com',
  messagingSenderId: '787776791293'
};

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsComponent,
    ResultsDetailComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
