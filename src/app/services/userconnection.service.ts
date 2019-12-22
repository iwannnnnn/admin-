import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { log } from 'util';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserconnectionService extends BaseService {
  constructor(private http: HttpClient) {
    super();
    this.apiURL = this.apiURL + 'api/userconectionn/';
  }
  getNotConnectedUsers(userid: any) {

    return this.http.get(this.apiURL + userid + '/get-notconnected-users/', this.generateoptios());
  }

  getConnectedUsers(userid: any) {


    return this.http.get(this.apiURL + userid + '/get-connected-users/', this.generateoptios());

  }
  add(request) {

    return this.http.post(this.apiURL + 'add/', JSON.stringify(request), this.generateoptios())
      .subscribe(data => console.log(data));
  }
  remove(userid: any, connectionid: any) {
    const url = this.apiURL + userid + '/remove/' + connectionid;
    return this.http.delete(url, this.generateoptios()).subscribe(data => console.log(data));
  }
}
