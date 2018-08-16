import { Component } from '@angular/core';
import { Title, } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Teste de Front-End SCCON';
  loading = true;

  constructor(
    private titleService: Title
  ) {}

  setTitle(title?) {
    this.titleService.setTitle(title ?  title + ' | ' + this.title : this.title);
  }

  public setLoading(flag: boolean) {
    this.loading = flag;
  }
}
