import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pedidos } from 'src/app/entidades/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  PATH_BACKEND = "http://localhost:" + "5138"

  URL_GET = this.PATH_BACKEND + "/api/Pedido/GetAllPedido";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/Pedidos/AddPedido";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: Pedidos): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CATEGORIA, entidad,
        { observe: 'response' })
      .pipe();
  }

}