import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './loading/loading.component';
import { ClientNotFoundComponent } from './client-not-found/client-not-found.component';
import { ZipSearchComponent } from './zip-search/zip-search.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule,
    MatInputModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ClientNotFoundComponent,
    ZipSearchComponent,
    MatDialogComponent
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
