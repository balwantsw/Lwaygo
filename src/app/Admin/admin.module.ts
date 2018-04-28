import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './/admin-routing.module';
import{AdminService} from './admin.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import {MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {ManageProductService} from './manage-products/manage-product.service'
import {ManageCategoryService} from './manage-category/manage-category.service'

@NgModule({
  declarations: [
    AdminComponent,
    ManageCategoryComponent,
    ManageProductsComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [HttpClient,AdminService,ManageProductService,ManageCategoryService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
