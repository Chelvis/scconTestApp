import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchClientComponent } from './components/client/search-client/search-client.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';
import { PostOrPutClientComponent } from './components/client/post-or-put-client/post-or-put-client.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'clientes/busca', component: SearchClientComponent },
  { path: 'clientes/dados/:id', component: ViewClientComponent },
  { path: 'clientes/cadastro', component: PostOrPutClientComponent },
  { path: 'clientes', redirectTo: 'cliente/busca'},
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
