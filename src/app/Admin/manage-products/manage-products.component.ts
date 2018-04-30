import { Component, OnInit } from '@angular/core';
import{ ManageProductService } from '../manage-products/manage-product.service';
import { Observable } from 'rxjs/Observable';
import{Product} from '../Models/product';

@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  fileToUpload: File = null;

  product=new Product();

  constructor(private manageProductService:ManageProductService) { }

  ngOnInit() {
  }
  saveProduct(product){
    debugger;
    console.log(product);
  }
  handleFileInput(files: FileList) {
    debugger;
    this.fileToUpload = files.item(0);
    this.manageProductService.uploadFileToActivity(this.fileToUpload);
}


}
