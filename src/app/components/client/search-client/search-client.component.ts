import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

  title = 'Busca de clientes';
  search: Client;
  results: Client[];

  constructor(
    private appComponent: AppComponent,
    private cliService: ClientsService
  ) { }

  ngOnInit() {
    this.search = {} as Client;
    this.search.address = {} as Address;
    this.doSearch();
    this.appComponent.setTitle(this.title);
  }

  doSearch() {
    this.appComponent.setLoading(true);
    this.cliService.search(this.search).subscribe((data: Client[]) => {
      this.results = data;
      this.appComponent.setLoading(false);
    }, error => {
      console.log(error);
    });
  }

  delete(id: number) {
    this.appComponent.setLoading(true);
    this.cliService.delete(id).subscribe(status => {
      alert('deletado');
      console.log(status);
      this.doSearch();
      this.appComponent.setLoading(false);
    }, error => {
      console.log(error);
    });
    return false;
  }

}
