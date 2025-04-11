import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ListadoIps } from './listado-ips-component/listado-ips-component.component';
import { AgregarUsuarios } from './agregar-usuarios-component/agregar-usuarios-component.component';
import { DescargasComponent } from './descargas/descargas.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { RegadminComponent } from './regadmin/regadmin.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent},
    { path: 'regadmin', component: RegadminComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },  
    { path: 'listado', component: ListadoIps, canActivate: [AuthGuard] },
    { path: 'agregar', component: AgregarUsuarios, canActivate: [AuthGuard] },
    { path: 'agregar/:id', component: AgregarUsuarios, canActivate: [AuthGuard] },
    { path: 'descargas', component: DescargasComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];
