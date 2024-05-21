import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page !'},
    {path: 'signup', component: SignupComponent, title: 'Signup'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'training', component: TrainingComponent, title: 'Training'}
];
