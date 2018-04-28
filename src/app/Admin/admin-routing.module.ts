import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCategoryComponent }   from './manage-category/manage-category.component'
import {ManageProductsComponent }   from './manage-products/manage-products.component'
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [
  { path: '', redirectTo: './manage-category', pathMatch: 'full' },
  { path: 'manage-category', component: ManageCategoryComponent },
  { path: 'manage-products', component: ManageProductsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}