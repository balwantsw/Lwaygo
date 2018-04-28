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
  MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [
    AdminComponent,
    ManageCategoryComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    AdminRoutingModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminService,HttpClient],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
