import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.gard';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { TraineeComponent } from './components/trainee/trainee.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trainee', component: TraineeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  {path: 'login', component: LoginComponent},
  {path : 'admin' , component : AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'trainee' , component : TraineeComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

