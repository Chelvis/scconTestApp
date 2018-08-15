import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

  search: Client;
  results: Client[];

  constructor(
    private cliService: ClientsService
  ) { }

  ngOnInit() {
    this.search = {} as Client;
    this.doSearch();
  }

  doSearch() {
    this.cliService.search(this.search).subscribe((data: Client[]) => {
      this.results = data;
    }, error => {
      console.log(error);
    });
  }

  delete(id: number) {
    this.cliService.delete(id).subscribe(status => {
      console.log(status);
    }, error => {
      console.log(error);
    });
    return false;
  }

}
