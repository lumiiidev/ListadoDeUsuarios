import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../auth/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule, MatSidenavModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  readonly router = inject(Router);
  isNavVisible = false;
  subscription!: Subscription;
  status$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {
    
  }
  ngOnInit() {
    this.status$ = this.authService.isAuthenticated$;
   }

   /* ngOnInit() {
    this.subscription = this.authService.loggingStatus.subscribe(status => {
      this.isNavVisible = status;
      console.log('Estado de la barra de navegación:', status);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }*/

    cerrarSesion(){
    this.authService.removeToken();
    console.log(this.authService.removeToken())
    alert('Has Cerrado Sesión Correctamente!');
    this.router.navigate(['/login']);
  }

}
