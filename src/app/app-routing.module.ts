
import { RoutingSegments } from './models/routing-segments';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchClientComponent } from './components/client/search-client/search-client.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';
import { PostOrPutClientComponent } from './components/client/post-or-put-client/post-or-put-client.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: RoutingSegments.search, component: SearchClientComponent },
  { path: RoutingSegments.data + '/:id', component: ViewClientComponent },
  { path: RoutingSegments.register, component: PostOrPutClientComponent },
  // { path: 'busca', component: SearchClientComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
