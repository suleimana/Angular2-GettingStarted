import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';


import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

import { ProductFilterPipe } from './products/product.filter.pipe';
import { StarComponent } from './shared/star.component';

import { HttpModule } from '@angular/http';

import {ProductModule } from './products/product.module';



@NgModule({
  imports: [    
    BrowserModule,    
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent           
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
