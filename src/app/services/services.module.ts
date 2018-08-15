import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesService } from './resources/resources.service';
import { ClientsService } from './clients/clients.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ResourcesService,
    ClientsService
  ]
})
export class ServicesModule { }
