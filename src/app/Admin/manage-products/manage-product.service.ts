import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
import{ Product} from '../Models/product'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ManageProductService {

  constructor(private http:HttpClient){
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
