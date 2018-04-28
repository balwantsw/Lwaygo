import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Personal/home/home.component';
import{ContactUsComponent}from './Personal/contact-us/contact-us.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent }
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}