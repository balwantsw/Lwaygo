import { Component, OnInit } from '@angular/core';
import{ category} from '../Models/category';
import{ManageCategoryService} from '../manage-category/manage-category.service';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import{Product} from '../Models/product';

@Component({
  selector: 'manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent  implements OnInit {
  categorieslist:any;
  categories=new category();

  constructor(private manageCategoryService:ManageCategoryService) { }

  ngOnInit() {
    // let data=[];
    debugger;
    this.categorieslist=this.manageCategoryService.getCategories();
    // this.dataSource = new MatTableDataSource(data);
  }

  selectedFile: File;

  SaveCategory(event){
    debugger;
    this.manageCategoryService.addCategory(event);
    console.log(event);
  }



  // onFileChanged(event) {
  //   debugger;
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }

  // onUpload() {
  //   // upload code goes here
  // }

}
