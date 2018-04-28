import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }
  product = [{name: 'INDOOR-PLANTS-FOR-OFFICE', items:['item1','item2','item3','item4', 'item5', 'item6']},
    {name: 'OFFICE FURNITURE', items:['item1','item2','item3','item4', 'item5', 'item6']},
    {name:'CLEANING', items:['item1','item2','item3','item4', 'item5', 'item6']},
    {name:'STATIONERY', items:['item1','item2','item3','item4', 'item5', 'item6']},
    {name:'TECHNOLOGY & COMMUNICATIONS', items:['item1','item2','item3','item4', 'item5', 'item6']}
  ];


  getCategory():any {
    return this.product;
  }

}
