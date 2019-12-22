import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageViewModel } from '../models/MessageViewModel';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {


  constructor(private http: HttpClient) {
    super();
    this.apiURL = this.apiURL + 'api/message/';
  }
  getMessage() {
    return this.http.get(this.apiURL + 'get', this.generateoptios());
  }
  save(request: MessageViewModel) {
    console.log(JSON.stringify(request));

    return this.http.post(this.apiURL + 'save', JSON.stringify(request), this.generateoptios()).subscribe(response => {
      console.log(response);
    });
  }

}
