import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
import{ category} from '../Models/category'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManageCategoryService {

  constructor(private http:HttpClient){
  }

  getCategories(): void {
      this.http.get('http://localhost:30521/api/Categories').subscribe(data => {
      console.log(data);
    });;
  }

  addCategory(category){
    let requestOptions = new RequestOptions({ headers:null, withCredentials: 
      true });
    let body = JSON.stringify(category);
    this.http.post('http://localhost:30521/api/Categories',category).subscribe(data => {
      console.log(data);
    });
  }



}
