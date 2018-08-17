import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostOrPutClientComponent } from './post-or-put-client/post-or-put-client.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [
    PostOrPutClientComponent,
    SearchClientComponent,
    ViewClientComponent
  ],
  providers: [
  ]
})
export class ClientModule { }
