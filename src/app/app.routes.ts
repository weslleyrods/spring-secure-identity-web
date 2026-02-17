import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { RegisterForm } from './register-form/register-form';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    data: { title: 'Welcome!' }
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'register',
    component: RegisterForm,
  }

];
