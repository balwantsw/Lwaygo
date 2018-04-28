import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCategoryComponent }   from './manage-category/manage-category.component'


const routes: Routes = [
  { path: '', redirectTo: './manage-category', pathMatch: 'full' },
  { path: 'manage-category', component: ManageCategoryComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}