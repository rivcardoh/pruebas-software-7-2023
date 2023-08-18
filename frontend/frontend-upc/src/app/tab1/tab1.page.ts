import { Component } from '@angular/core';
import { Usuarios } from '../entidades/usuarios';
import { HttpResponse } from '@angular/common/http';
import { UsuariosService } from '../servicios-backend/usuarios/usuarios.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nombreCompleto = ""
  public userName = ""
  public password = ""

  public listaUsuarios: Usuarios[] = []

  constructor(private usuariosService: UsuariosService) {

    /*     let usuario: Usuarios = new Usuarios();
        usuario.nombreCompleto = "Ricardo Rivera "
        usuario.userName = "rrivera"
        usuario.password = "2023"
    
        this.listaUsuarios.push(usuario)
        this.listaUsuarios.push(usuario) */

    this.getUsuarios();
      this.usuariosService.GetAllUsuarios().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listaUsuarios = response.body;
        //luego de llamar al servicio
      },
      error: (error: any) => {
        console.log(error);
        //falla
      },
      complete: () => {
        //termina todo
      },
    });
  }

  public getUsuarios() {

  }

  public addUsuario() {

  }

}