import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiciosService } from '../servicios/crud-service.service';


@Component({
  selector: 'app-agregar-usuarios-component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agregar-usuarios-component.component.html',
  styleUrl: './agregar-usuarios-component.component.css'
})
export class AgregarUsuarios {

  @Input() id!: number;
  readonly serviciosService = inject(ServiciosService);
  readonly router = inject(Router);
  userId: any;
  editUserId: any;
  deleteUserId: any;
  nombreValor:string = '';
  areaValor:string = '';
  ip_address:string = '';
  mensajeError:string = '';

  ngOnInit(): void {
    if(this.id){
      this.serviciosService.mostrarUsuario(this.id).subscribe({
        next:(response:any)=>{
          console.log('mostrarUsuario',response);
          this.nombreValor=response.data.name;
          this.areaValor=response.data.area;
          this.ip_address=response.data.ip_address;
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }
  }
  crearUsuario(){
    let datos:any = {
      name: this.nombreValor,
      area: this.areaValor,
      ip_address: this.ip_address
    };
    this.serviciosService.enviar(datos).subscribe({
      next:(response:any)=>{
        console.log('next',response);
        this.nombreValor=response.data.name;
        this.areaValor=response.data.area;
        this.ip_address=response.data.ip_address;
        alert('Se agregó usuario correctamente')
        if(confirm('Quieres agregar un nuevo usuario?')){
          this.nombreValor = '';
          this.areaValor = '';
          this.ip_address = '';
        }
          else{
        this.router.navigate(['/listado']);}  
      },
      error:(response:any)=>{
        console.log('error',response);
        this.mensajeError = 'Ocurrió un error en el servidor';
      }
    });
  }

  

  clickValor(){
    console.log('enviando',this.nombreValor);
    console.log('enviando',this.areaValor);
    console.log('enviando',this.ip_address);

    let datos:any = {
      name: this.nombreValor,
      area: this.areaValor,
      ip_address: this.ip_address
    };
    if(this.id){
      this.serviciosService.editar(this.id, datos).subscribe({
        next:(response:any)=>{
          console.log('editar',response);
          alert('Se guardaron los datos correctamente')
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }
    else{
      this.serviciosService.enviar(datos).subscribe({
        next:(response:any)=>{
          console.log('next',response);
          alert('Se agregó usuario correctamente')
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }    
  }

  eliminarIP(){

    if(this.id != 0 || this.id != null || this.id != undefined){
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')){
      this.serviciosService.eliminar(this.id).subscribe({
        next:(response:any)=>{
          alert('Usuario Eliminado')
          console.log('eliminar',response);
          this.router.navigate(['/listado']);
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    
    }
  }   

  }



}
