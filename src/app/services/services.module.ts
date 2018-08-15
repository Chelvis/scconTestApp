import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResourcesService } from './resources/resources.service';
import { ClientsService } from './clients/clients.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ResourcesService,
    ClientsService
  ]
})
export class ServicesModule { }
