import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RoutingSegments } from '../../models/routing-segments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  routingSegments = RoutingSegments;

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.title = this.appComponent.title;
    this.appComponent.setTitle();
  }

}
