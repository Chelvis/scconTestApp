import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class GetAddressService {

  private endPoint = environment.viaCepEndPoint;

  constructor(
    private http: HttpClient
  ) { }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(this.makeUrl(cep));
  }

  private makeUrl(cep: string) {
    return this.endPoint + cep.replace('-', '') + '/json';
  }

}
