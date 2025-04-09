import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar/nav-bar.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from "./home-component/home-component.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {   
  
  status$: Observable<boolean> | undefined;
  constructor(private authService: AuthService) { }

 ngOnInit() {
  this.status$ = this.authService.isAuthenticated$;
 }

  logout() {
    this.authService.logout();
  }  
  
}