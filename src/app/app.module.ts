import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './components/home/home.module';
import { ClientModule } from './components/client/client.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ClientModule,
    SharedModule,
    ServicesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
