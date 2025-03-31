import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiciosService } from '../servicios/crud-service.service';

@Component({
  selector: 'app-listado-ips-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-ips-component.component.html',
  styleUrl: './listado-ips-component.component.css'
})
export class ListadoIps implements OnInit {

  readonly servicio = inject(ServiciosService);  
     
  usuarios: any[] = [];
  mensajeError:string = '';

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){

    this.servicio.obtenerUsuarios().subscribe({
      next: (response: any) => {
        this.usuarios = response.data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }
  eliminarIP(id:number){
    if(id != 0 || id != null || id != undefined){
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')){
      this.servicio.eliminar(id).subscribe({
        next:(response:any)=>{
          alert('Usuario Eliminado')          
          console.log('eliminar',response);          
          this.obtenerUsuarios();                          
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
