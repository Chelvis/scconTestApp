import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Client } from '../../models/client';
import { environment } from '../../../environments/environment';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  dbDir = environment.dbDir;
  clientsDir = this.dbDir + 'clients/';

  constructor(
    private http: HttpClient
  ) { }

  // Lista todos os clientes
  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsDir);
  }

  // Recebe cliente pelo ID
  getById(id: number): Observable<Client> {
    return this.http.get<Client>(this.clientsDir + id.toString());
  }

  // Insere novo cliente
  post(data: Client, address: Address): Observable<Client> {
    data.address = address;
    return this.http.post<Client>(this.clientsDir, data, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

  // Atualiza dados de cliente existente
  patch(id: number, data: Client, address: Address): Observable<Client> {
    data.address = address;
    return this.http.patch<Client>(
      this.clientsDir + id.toString(),
      data,
      { headers: { 'Content-type': 'application/json; charset=UTF-8' } }
    );
  }

  // Exclui um cliente
  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.clientsDir + id.toString());
  }

  // Filtra clientes
  search(data: Client): Observable<any> {
    let params = new HttpParams();

    if (data.name) {
      params = params.append('name', data.name);
    }
    if (data.email) {
      params = params.append('email', data.email);
    }
    if (data.address.cep) {
      params = params.append('address.cep', data.address.cep);
    }

    console.log(params);

    return this.http.get<any>(this.clientsDir, { params: params });
  }

}
