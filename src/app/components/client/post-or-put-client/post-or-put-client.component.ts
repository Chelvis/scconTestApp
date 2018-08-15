import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html',
  styleUrls: ['./post-or-put-client.component.scss']
})
export class PostOrPutClientComponent implements OnInit {

  client: Client;

  constructor() { }

  ngOnInit() {
    this.client = {active: true} as Client;
    this.client.address = {} as Address;
  }

}
