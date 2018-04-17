import { Injectable } from '@angular/core';

@Injectable()
export class OfficeProductsService {

  constructor() { }
  product = [{name: 'INDOOR-PLANTS-FOR-OFFICE', items:['item1','item2','item3','item4']},
    {name: 'OFFICE FURNITURE', items:['item1','item2','item3','item4']},
    {name:'CLEANING', items:['item1','item2','item3','item4']},
    {name:'STATIONERY', items:['item1','item2','item3','item4']},
    {name:'TECHNOLOGY & COMMUNICATIONS', items:['item1','item2','item3','item4']}
  ];


  getCategory():any {
    return this.product;
  }
}
