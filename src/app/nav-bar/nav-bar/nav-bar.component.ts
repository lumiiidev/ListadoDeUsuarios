import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule, MatSidenavModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isNavVisible = true; // Initially visible
  toggleNav() {
    this.isNavVisible = !this.isNavVisible; // Toggle visibility
  }
}
