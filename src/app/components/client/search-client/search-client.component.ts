import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';

import { RoutingSegments } from '../../../models/routing-segments';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

  title = 'Busca de clientes';
  results: Client[];

  form: FormGroup;

  routingSegments = RoutingSegments;

  constructor(
    private appComponent: AppComponent,
    private formBuilder: FormBuilder,
    private cliService: ClientsService
  ) { }

  ngOnInit() {

    // Constrói o FormGroup com os campos padrões para a busca
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      address: this.formBuilder.group({cep: ''})
    });

    this.doSearch();
    this.appComponent.setTitle(this.title);
  }

  // Faz a busca com os dados de busca atuais
  doSearch() {
    this.appComponent.setLoading(true);
    console.log(this.form.value);
    this.cliService.search(this.form.value).subscribe((data: Client[]) => {
      this.results = data;
      this.appComponent.setLoading(false);
    }, error => {
      console.log(error);
    });
  }

  // Método deleta o cliente
  delete(id: number) {

    // Recebe confirmação do usuário
    if (!confirm('Deseja mesmo deletar o cliente?')) {
      return;
    }

    this.appComponent.setLoading(true);

    // Requisita remoção via serviço DELETE
    this.cliService.delete(id).subscribe(status => {
      alert('Cliente deletado com sucesso.');
      this.doSearch();
      this.appComponent.setLoading(false);
    }, error => {
      console.log(error);
    });
    return false;
  }

}
