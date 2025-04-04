import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule, MatSidenavModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  readonly router = inject(Router);
  isNavVisible = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isNavVisible = this.authService.isLoggedIn(); 
  }
}
