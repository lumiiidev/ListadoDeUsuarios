import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-regadmin',
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './regadmin.component.html',
  styleUrl: './regadmin.component.css'
})
export class RegadminComponent {
  readonly router = inject(Router);
  isTyping: boolean = false;
  user: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),  
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
  });
  constructor(private authService: AuthService) { }
    
  onSubmit(): void {
    if(this.user.valid){
    const credentials = this.user.value;
    this.authService.register(credentials).subscribe({
      next: (response)=>{
        console.log('usuario creado exitosamente:',response);
        alert("Tu usuario ha sido registrado correctamente!");
        this.router.navigate(['/home']);
        console.log(this.user.value); 

      }
    });    
  }
}

onTyping() {  
  this.isTyping = this.user.controls['name'].value.trim().length != 0;
}  

}
