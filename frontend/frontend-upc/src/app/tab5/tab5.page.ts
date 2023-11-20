import { Component } from '@angular/core';
import { ProveedorService } from '../servicios-backend/proveedor/proveedor.service';
import { HttpResponse } from '@angular/common/http';
import { Proveedor } from '../entidades/proveedor';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  public id: any
  public nombreProveedor  = ""
  public listaProveedor: Proveedor[] = []

  constructor(private ProveedorService: ProveedorService) {
    this.getProveedorFromBackend();
  }

  private getProveedorFromBackend(){
    this.ProveedorService.GetAll().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listaProveedor = response.body;
            console.log(this.listaProveedor)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }

  public addProveedor(){
   this.AddProveedorFromBackend(this.nombreProveedor)
  }

  private AddProveedorFromBackend(nombreProveedor: string){

    var proveedprEntidad = new Proveedor();

    proveedprEntidad.nombreProveedor = nombreProveedor;

    this.ProveedorService.Add(proveedprEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
              alert("Se agrego El proveedor con exito :)");
              this.getProveedorFromBackend();//Se actualize el listado
              this.nombreProveedor = "";
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
  public DeleteProveedor(id: number){
    this.deleteItem(id)
   }
  private deleteItem(id: number) {
    
    this.ProveedorService.deleteItem(id).subscribe(
      
      response => {
        alert('Registro eliminado con éxito');
        this.getProveedorFromBackend();
        // Realiza cualquier acción adicional después de la eliminación
      });
  }

  public GetByIdProveedor(id: number){
    this.getByID(id)
   }
  private getByID(id: number) {
    
    this.ProveedorService.getById(id).subscribe(
      
      response => {
        alert(JSON.stringify( response.body));
      });
  }
}