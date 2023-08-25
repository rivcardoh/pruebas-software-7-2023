import { Component } from '@angular/core';
import { Producto } from '../entidades/producto';
import { ProductoService } from '../servicios-backend/producto/producto.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nombre  = ""
  public idCategoria  = ""
  public listaCategoria: Producto[] = []

  constructor(private productoService: ProductoService) {
    this.getCategoriaFromBackend();
  }

  private getCategoriaFromBackend(){
    this.productoService.GetAll().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listaCategoria = response.body;
            console.log(this.listaCategoria)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }

  public addProducto(){
   this.AddProductoFromBackend(this.nombre, this.idCategoria)
  }

  private AddProductoFromBackend(nombre: string, idCategoria: string){

    var productoEntidad = new Producto();
    productoEntidad.nombre = nombre;
    productoEntidad.idCategoria= idCategoria;

    this.productoService.Add(productoEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
              alert("Se agrego el producto con exito :)");
              this.getCategoriaFromBackend();//Se actualize el listado
              this.nombre = "";
          }else{
              alert("Al agregar el producto fallo exito :(");
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

}
