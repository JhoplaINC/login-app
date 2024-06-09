import { Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { LoginRegisterComponent } from './components/forms/login-register/login-register.component';

export const routes: Routes = [
    // General routes
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginRegisterComponent },
    { path: 'register', component: LoginRegisterComponent },
];
