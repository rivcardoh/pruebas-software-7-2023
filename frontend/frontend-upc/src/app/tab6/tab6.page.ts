import { Component } from '@angular/core';
import { Pedidos } from '../entidades/pedidos';
import { PedidosService } from '../servicios-backend/pedidos/pedidos.service';

import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {

 
  public idUsuario = ""
  public cantidad = ""
  public idProducto = ""
  public idProveedor = ""
  
  public listaPedidos: Pedidos[] = []

  constructor(private pedidoService: PedidosService) {

    this.getPedidoFromBackend();
/*     this.getDetalleCarritoFromBackend(); */
  }

  private getPedidoFromBackend() {
    this.pedidoService.GetAll().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listaPedidos = response.body;
        console.log(this.listaPedidos)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        //console.log('complete - this.getUsuarios()');
      },
    });
  }

/*   private getDetalleCarritoFromBackend() {
    this.detalleCarritoService.GetAll().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listaDetalleCarrito = response.body;
        console.log(this.listaDetalleCarrito)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        //console.log('complete - this.getUsuarios()');
      },
    });
  } */


}
