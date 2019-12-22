import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfilleUserViewModel } from '../models/ProfilleUserViewModel';
import { Location, GetLocationViewModel } from '../models/Location';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: ProfilleUserViewModel;
  Id: string;
  load = false;
  locations: Location[];
  itemsPerPage = 10;
  totalItems: any;
  page: any = 1;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private locationservice: LocationsService) {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.Id = id;
    }
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.user = {
      id: '68fbdd21-5267-447f-9004-1fe607d3ca85',
      username: 'test1zzz@admin.com',
      firstname: 'Test1',
      lastname: 'Testing',
      status: 0,
      connected: [
        {
          id: '4cae3691-7c28-48ec-850e-160b0feac635',

          firstname: 'SuperAdmin',


        },
        {
          id: '72ca67d1-aa79-438e-8fc6-577e75f3dcde',

          firstname: 'Test1',
          lastname: 'Testing',

        },
        {
          id: '8a394a59-4090-4273-9f4f-edacfe4c4e0f',

          firstname: 'Test1',
          lastname: 'Testing1',

          userStatus: 0
        },
        {
          id: '9194923e-96db-4feb-b9c5-fc152949c636',

          firstname: 'Test',
          lastname: 'Testing'
        },
        {
          id: 'd9310c34-a923-4dbb-bf67-8f0b9528d592',

          firstname: 'System'
        }
      ],
      locations: []
    };
    // this.userService.getUserProfuile(this.Id).subscribe((data: ProfilleUserViewModel) => {
    //   this.user = data;
    //   this.getlocations();

    //   this.load = true;
    // });
  }

  loadPage(page) {
    this.page = page;
    this.getlocations();
  }
  getlocations() {

    this.locationservice.getLocations(this.Id, this.page, this.itemsPerPage).subscribe((data: GetLocationViewModel) => {
      if (data != null) {

        this.totalItems = data.totalRows;
        this.locations = data.result;
      }
    });
  }
  edit(id) {

    this.router.navigate(['/user-add', id]);
  }
}
