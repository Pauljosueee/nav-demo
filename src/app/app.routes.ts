import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { DashboardPage } from './dashboard/dashboard.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPage },
];
