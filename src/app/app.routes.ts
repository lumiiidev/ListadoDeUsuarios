import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ListadoIps } from './listado-ips-component/listado-ips-component.component';
import { AgregarUsuarios } from './agregar-usuarios-component/agregar-usuarios-component.component';
import { DescargasComponent } from './descargas/descargas.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prueba', component: PruebaComponent },
    { path: 'listado', component: ListadoIps },
    { path: 'agregar', component: AgregarUsuarios },
    { path: 'agregar/:id', component: AgregarUsuarios },
    { path: 'descargas', component: DescargasComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home

];
