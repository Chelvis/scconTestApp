import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientModule } from './client/client.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    SharedModule,
    ClientModule
  ],
  declarations: [
  ]
})
export class ComponentsModule { }
