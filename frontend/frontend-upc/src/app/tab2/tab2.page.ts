import { Component } from '@angular/core';
import { CategoriaProducto } from '../entidades/categoriaProducto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nombre = ""


  public listaCategoriaProducto: CategoriaProducto[] = []

  constructor() {

    let categoriaProducto: CategoriaProducto = new CategoriaProducto();
    categoriaProducto.nombre = "Limpieza "


    this.listaCategoriaProducto.push(categoriaProducto)


  }


  public addCategoriaProducto(){

  }

}