import { Component, OnInit } from '@angular/core';
import{HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService) { }


  products:any;

  ngOnInit() {
debugger;
    this.getProduct();
  }

  getProduct(): void {
    this.products = this.homeService.getCategory();
    console.log(this.products);
  }

}
