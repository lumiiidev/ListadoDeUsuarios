import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-prueba',
  imports: [CommonModule, RouterModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  readonly router = inject(Router);

  referencia(){
    this.router.navigate(['/listado']);
    }
}
