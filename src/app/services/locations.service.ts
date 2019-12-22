import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService extends BaseService {
  constructor(private http: HttpClient) {
    super();
    this.apiURL = this.apiURL + 'api/locations/';
  }
  getLocations(userid: any, page, pagesize) {


    return this.http.get(this.apiURL + userid + '/get-locations/' + page + '/' + pagesize, this.generateoptios());

  }
}
