import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isNavVisible = true ; 
  
  
}
