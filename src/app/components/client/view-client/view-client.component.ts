import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  client: Client;

  constructor() { }

  ngOnInit() {
    this.client = {name: 'Testeee', id: 281} as Client;
    this.client.address = {} as Address;
  }

}
