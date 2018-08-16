import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostOrPutClientComponent } from './post-or-put-client/post-or-put-client.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule
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
