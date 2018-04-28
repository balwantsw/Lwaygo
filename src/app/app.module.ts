import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactUsComponent } from './Personal/contact-us/contact-us.component';
import { HomeComponent } from './Personal/home/home.component';
import{HomeService } from './Personal/home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
