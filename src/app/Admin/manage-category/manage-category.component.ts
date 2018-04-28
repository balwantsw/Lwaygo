import { Component, OnInit } from '@angular/core';
import{ category} from '../Models/category';
import{AdminService} from '../admin.service';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent  implements OnInit {
  fileToUpload: File = null;
  categorieslist:any;
  categories=new category();

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    // let data=[];
    debugger;
    this.categorieslist=this.adminService.getCategories();
    // this.dataSource = new MatTableDataSource(data);
  }

  selectedFile: File;

  SaveCategory(event){
    debugger;
    this.adminService.addCategory(event);
    console.log(event);
  }
  handleFileInput(files: FileList) {
    debugger;
    this.fileToUpload = files.item(0);
    this.adminService.uploadFileToActivity(this.fileToUpload);
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
