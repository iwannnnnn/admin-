import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // Define API
  apiURL = environment.apiUrl;

  constructor() {

  }
  generateoptios(): {} {

    const logintoken = localStorage.getItem('loginToken');
    let optionsHeader = null;
    if (logintoken) {
      optionsHeader = {
        headers: new HttpHeaders().append('Content-Type', 'application/json').append('loginToken', logintoken)
      };

    } else {

      optionsHeader = {
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      };

    }
    console.log(optionsHeader);

    return optionsHeader;
  }
}
