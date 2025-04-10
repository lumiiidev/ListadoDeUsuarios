import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home-component',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponent {
  readonly router = inject(Router); 

  constructor(
    private authService: AuthService
  ) {}  

  getToken(){
    console.log(this.authService.getToken())
  }
  cerrarSesion(){
    this.authService.removeToken();
    console.log(this.authService.removeToken())
    alert('Has Cerrado Sesión Correctamente!');
    this.router.navigate(['/login']);
  }


}
