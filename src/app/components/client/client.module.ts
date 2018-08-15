import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostOrPutClientComponent } from './post-or-put-client/post-or-put-client.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
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
