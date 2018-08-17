import { Component, OnInit } from '@angular/core';
import { RoutingSegments } from '../../../models/routing-segments';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routingSegments = RoutingSegments;

  constructor() { }

  ngOnInit() {
  }

}
