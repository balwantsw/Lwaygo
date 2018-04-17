import { Component, OnInit } from '@angular/core';
import{OfficeProductsService} from './office-products.service'

@Component({
  selector: 'app-office-products',
  templateUrl: './office-products.component.html',
  styleUrls: ['./office-products.component.css']
})
export class OfficeProductsComponent implements OnInit {
  products:any;
  constructor(private officeProductsService: OfficeProductsService) { }

  ngOnInit() {
debugger;
    this.getProduct();
  }

  getProduct(): void {
    this.products = this.officeProductsService.getCategory();
    console.log(this.products);
  }

}
