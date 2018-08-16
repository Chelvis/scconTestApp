import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { LoadingComponent } from './loading/loading.component';
import { ClientNotFoundComponent } from './client-not-found/client-not-found.component';
import { ZipSearchComponent } from './zip-search/zip-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ClientNotFoundComponent,
    ZipSearchComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ClientNotFoundComponent,
    ZipSearchComponent
  ]
})
export class SharedModule { }
