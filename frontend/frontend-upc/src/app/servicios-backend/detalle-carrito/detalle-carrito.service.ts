import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DetalleCarrito } from 'src/app/entidades/detalle-carrito';

@Injectable({
  providedIn: 'root'
})
export class DetalleCarritoService {

  PATH_BACKEND = "http://localhost:" + "5138"

  URL_GET = this.PATH_BACKEND + "/api/DetalleCarrito/GetAllDetalleCarrito";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/DetalleCarrito/AddDetalleCarrito";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: DetalleCarrito): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CATEGORIA, entidad,
        { observe: 'response' })
      .pipe();
  }
}
