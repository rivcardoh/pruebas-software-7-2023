import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  PATH_BACKEND = "http://localhost:" + "5138"

  URL_GET = this.PATH_BACKEND + "/api/Producto/GetAllProducto";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/Producto/AddProducto";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: Producto): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CATEGORIA, entidad,
        { observe: 'response' })
      .pipe();
  }

}