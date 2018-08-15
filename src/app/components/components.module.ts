import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientModule } from './client/client.module';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    ClientModule
  ],
  declarations: [
    PageNotFoundComponent,
  ]
})
export class ComponentsModule { }
