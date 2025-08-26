import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
// import { Services } from './pages/services/services';
// import { Aboutus } from './pages/aboutus/aboutus';
// import { Contactus } from './pages/contactus/contactus';
// import { Singup } from './auth/singup/singup';
// import { Login } from './auth/login/login';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
    { path: 'aboutus', loadComponent: () => import('./pages/aboutus/aboutus').then(m => m.Aboutus) },
    { path: 'contactus', loadComponent: () => import('./pages/contactus/contactus').then(m => m.Contactus) },
    { path: 'addbooks', loadComponent: () => import('./pages/addbooks/addbooks').then(m => m.Addbooks) },
    { path: 'signup', loadComponent: () => import('./auth/singup/singup').then(m => m.Singup) },
    { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
    { path: '', redirectTo:'home',pathMatch:'full' },
];
