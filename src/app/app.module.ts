import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OfficeProductsComponent } from './office-products/office-products.component';
import { AppRoutingModule } from './/app-routing.module';
import{OfficeProductsService} from './office-products/office-products.service';


@NgModule({
  declarations: [
    AppComponent,
    OfficeProductsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OfficeProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
