import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/entidades/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  PATH_BACKEND = "http://localhost:" + "5138"

  URL_GET = this.PATH_BACKEND + "/api/Proveedor/GetAllProveedor";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/Proveedor/AddProveedor";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: Proveedor): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CATEGORIA, entidad,
        { observe: 'response' })
      .pipe();
  }

}