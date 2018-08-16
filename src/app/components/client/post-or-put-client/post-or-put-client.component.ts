import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { Address } from '../../../models/address';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html',
  styleUrls: ['./post-or-put-client.component.scss']
})
export class PostOrPutClientComponent implements OnInit {

  title: string;
  client: Client;
  validation: any;
  requestError: boolean;

  notFound = false;
  newClient = false;

  constructor(
    private appComponent: AppComponent,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(query => {
      if (query.id) {
        this.appComponent.setLoading(true);
        this.clientsService.getById(parseInt(query.id, 10)).subscribe((data: Client) => {
          this.client = data;
          this.appComponent.setLoading(false);
        }, error => {
          if (error.status === 404) {
            this.notFound = true;
          }
          console.log(error);
          this.appComponent.setLoading(false);
        });
        this.title = 'Editar dados do cliente';
      } else {
        this.client = {active: true} as Client;
        this.client.address = {} as Address;
        this.newClient = true;
        this.title = 'Cadastrar cliente';
      }
      this.appComponent.setTitle(this.title);
    });

  }

  private addAddress(e) {
    this.client.address = e;
  }

  private validate(): boolean {
    this.validation = [];

    const namePattern = /[A-Z].*\s[A-Z].*/;
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!this.client.name) { this.validation.push('Por favor, informe seu nome'); } else
    if (!namePattern.test(this.client.name)) { this.validation.push('Por favor, informe seu nome e sobrenome iniciando com maíusculas'); }
    if (!this.client.email) { this.validation.push('Por favor, informe seu e-mail'); } else
    if (!emailPattern.test(this.client.email)) { this.validation.push('Por favor, informe um endereço de e-mail válido'); }
    if (!this.client.address.logradouro) { this.validation.push('Por favor, informe seu CEP completo'); }

    return (this.validation.length === 0);

  }

  submit() {
    if (!this.validate()) {
      setTimeout(() => document.getElementsByClassName('messages')[0].scrollIntoView(), 50);
      return;
    }

    this.appComponent.setLoading(true);

    this.client.date = new Date();

    if (this.newClient) {
      this.clientsService.post(this.client).subscribe((data: Client) => {
        alert('Inserido com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else {
      this.clientsService.put(this.client.id, this.client).subscribe((data: Client) => {
        alert('Alterado com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    }
  }

  delete() {
    if (!this.client.id) {
      return;
    }
    this.appComponent.setLoading(true);
    this.clientsService.delete(this.client.id).subscribe(data => {
      this.router.navigate(['/clientes/busca']);
    }, error => console.log(error));
  }


}
