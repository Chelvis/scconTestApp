import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.appComponent.setTitle('404');
  }

}
