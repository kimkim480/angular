import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { ResultsDetailComponent } from './results/results-detail/results-detail.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: FormComponent },
    { path: 'consultar', component: ResultsComponent },
    { path: 'consultar/:id', component: ResultsDetailComponent }
];
