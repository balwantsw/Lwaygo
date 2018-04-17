import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OfficeProductsComponent }   from './office-products/office-products.component'
 
const routes: Routes = [
  { path: '', redirectTo: '/office-products', pathMatch: 'full' },
  { path: 'office-products', component: OfficeProductsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}