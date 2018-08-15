import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { Address } from '../../../models/address';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html',
  styleUrls: ['./post-or-put-client.component.scss']
})
export class PostOrPutClientComponent implements OnInit {

  client: Client;
  validation: any;
  requestError: boolean;

  notFound = false;
  newClient = false;

  constructor(
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(query => {
      if (query.id) {
        this.clientsService.getById(parseInt(query.id, 10)).subscribe((data: Client) => {
          this.client = data;
        }, error => {
          if (error.status === 404) {
            this.notFound = true;
          }
          console.log(error);
        });
      } else {
        this.client = {active: true} as Client;
        this.client.address = {} as Address;
        this.newClient = true;
      }
    });

  }

  private validate(): boolean {
    this.validation = [];

    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!this.client.name) { this.validation.push('Por favor, informe seu nome'); }
    if (!this.client.email) { this.validation.push('Por favor, informe seu e-mail'); } else
    if (!emailPattern.test(this.client.email)) { this.validation.push('Por favor, informe um endereço de e-mail válido'); }
    if (!this.client.zipCode) { this.validation.push('Por favor, informe seu CEP'); }

    return (this.validation.length === 0);

  }

  submit() {
    if (!this.validate()) {
      setTimeout(() => document.getElementsByClassName('messages')[0].scrollIntoView(), 50);
      return;
    }

    if (this.newClient) {
      this.clientsService.post(this.client).subscribe((data: Client) => {
        alert('Inserido com sucesso!');
      }, error => {
        console.log(error);
      });
    } else {
      this.clientsService.put(this.client.id, this.client).subscribe((data: Client) => {
        alert('Alterado com sucesso!');
      }, error => {
        console.log(error);
      });
    }

    // this.clientsService.post

  }

}
