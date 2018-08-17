import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { RoutingSegments } from '../../../models/routing-segments';

import { AppComponent } from '../../../app.component';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  title = 'Ficha do cliente';
  client: Client;
  notFound = false;

  routingSegments = RoutingSegments;

  constructor(
    private appComponent: AppComponent,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.appComponent.setLoading(true);
    this.appComponent.setTitle(this.title);
    this.activatedRoute.params.subscribe(params => {
      this.clientsService.getById(parseInt(params.id, 10)).subscribe((data: Client) => {
        this.client = data;
        this.appComponent.setLoading(false);
      }, error => {
        if (error.status === 404) {
          this.notFound = true;
        }
        console.log(error);
        this.appComponent.setLoading(false);
      });
    });
  }

  delete() {
    if (!this.client.id) {
      return;
    }
    this.appComponent.setLoading(true);
    this.clientsService.delete(this.client.id).subscribe(data => {
      this.router.navigate(['/clientes/busca']);
    }, error => {
      console.log(error);
    });
  }

}
