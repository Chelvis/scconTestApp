import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Client } from '../../models/client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  dbDir = environment.dbDir;
  clientsDir = this.dbDir + 'clients/';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsDir);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(this.clientsDir + id.toString());
  }

  post(data: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsDir, data, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

  put(id: number, data: Client): Observable<Client> {
    return this.http.patch<Client>(
      this.clientsDir + id.toString(),
      data,
      { headers: { 'Content-type': 'application/json; charset=UTF-8' } }
    );
  }

  delete(id: number): Observable<any> {
    if (!confirm('Deseja mesmo deletar o cliente?')) {
      return;
    }
    return this.http.delete<any>(this.clientsDir + id.toString);
  }

  search(data: Client): Observable<any> {
    let params = new HttpParams();
    Object.keys(data).forEach(function (key) {
      if (data[key]) {
        params = params.append(key, data[key]);
      }
    });
    return this.http.get<any>(this.clientsDir, { params: params });
  }

}
