import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
import{ category} from '../Admin/Models/category'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

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

  uploadFileToActivity(fileToUpload) {
    debugger;
    const endpoint = 'http://localhost:30521/api/fileupload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    this.http
      .post(endpoint, formData).subscribe(data => {
      });
  }

}
