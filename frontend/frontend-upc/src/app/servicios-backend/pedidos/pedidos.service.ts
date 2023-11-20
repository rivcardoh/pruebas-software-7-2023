import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pedidos } from 'src/app/entidades/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  PATH_BACKEND = "http://localhost:" + "5138"

  URL_GET = this.PATH_BACKEND + "/api/Pedido/GetAllPedido";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/Pedido/AddPedido";
  URL_DELETE_PEDIDO= this.PATH_BACKEND +"/api/Pedido/DeletePedido";
  URL_GET_BY_ID_PEDIDO= this.PATH_BACKEND +"/api/Pedido/GetPedidoById";

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

  public getById(id: number): Observable<HttpResponse<any>> {
    var parametros= new HttpParams()
    parametros=parametros.set('id', id)
    return this.httpClient
      .get<any>(this.URL_GET_BY_ID_PEDIDO,
        { params: parametros,observe: 'response' })
      .pipe();
  }
  public deleteItem(id: number): Observable<HttpResponse<any>> {
    var parametros= new HttpParams()
    parametros=parametros.set('id', id)
    return this.httpClient
      .delete<any>(this.URL_DELETE_PEDIDO,
        { params: parametros,observe: 'response' })
      .pipe();
  }


}