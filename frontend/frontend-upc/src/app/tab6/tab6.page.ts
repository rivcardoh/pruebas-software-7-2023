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

  public id: any
  public idProveedor = ""
  public idProducto = ""
  public idUsuario = ""
  public cantidad = ""
  public listaPedidos: Pedidos[] = []

  constructor(private pedidoService: PedidosService) {
    this.getPedidoFromBackend();

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

   public addPedido(){
    this.AddPedidoFromBackend(this.idProveedor, this.idProducto, this.idUsuario, this.cantidad)
   }
 
   private AddPedidoFromBackend(idProveedor: string, idProducto: string, idUsuario: string, cantidad: string){
 
     var pedidosEntidad = new Pedidos();
 
     pedidosEntidad.idProveedor = idProveedor;
     pedidosEntidad.idUsuario = idProducto;
     pedidosEntidad.idUsuario = idUsuario;
     pedidosEntidad.cantidad = cantidad;
 
     this.pedidoService.Add(pedidosEntidad).subscribe({
       next: (response: HttpResponse<any>) => {
           console.log(response.body)//1
           if(response.body == 1){
               alert("Se agrego El pedido con exito :)");
               this.getPedidoFromBackend();//Se actualize el listado
               this.idProducto = "";
               this.idProveedor="";
               this.idUsuario="";
               this.cantidad="";
           }else{
               alert("Al agregar la CATEGORIA fallo exito :(");
           }
       },
       error: (error: any) => {
           console.log(error);
       },
       complete: () => {
           //console.log('complete - this.AddUsuario()');
       },
   });
   }

   public GetByIdPedido(id: number){
    this.getByID(id)
   }
  private getByID(id: number) {
    
    this.pedidoService.getById(id).subscribe(
      
      response => {
        alert(JSON.stringify( response.body));
      });
  }

  public DeletePedido(id: number){
    this.deleteItem(id)
   }
  private deleteItem(id: number) {
    
    this.pedidoService.deleteItem(id).subscribe(
      
      response => {
        alert('Registro eliminado con éxito');
        this.getPedidoFromBackend();
        // Realiza cualquier acción adicional después de la eliminación
      });
  }
}
