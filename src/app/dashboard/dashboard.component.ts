import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserGetAllResponceViewModel, UserGetAlReaponce } from '../models/UserGetAllResponceViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  resultGellAllUser: UserGetAlReaponce;
  users: UserGetAllResponceViewModel[] = [];
  constructor(private router: Router, private userService: UserService) { }

  itemsPerPage = 2;
  totalItems: any;
  page: any = 1;
  previousPage: any;

  loadPage(page) {
    this.page = page;
    this.getusers();
  }
  ngOnInit() {
    this.getusers();
  }
  private getusers() {

    // tslint:disable-next-line:max-line-length
    const data = { totalRows: 5, result: [{ id: '4cae3691-7c28-48ec-850e-160b0feac635', userName: 'SuperAdmin@TrackerApp.com', firstName: 'SuperAdmin', lastName: null, phone: null, status: 4, connected: ['T T', 'S '] }, { id: '68fbdd21-5267-447f-9004-1fe607d3ca85', userName: 'test1zzz@admin.com', firstName: 'Test1', lastName: 'Testing', phone: '123456', status: 1, connected: ['S ', 'T T', 'T T', 'T T', 'S '] }] };

    this.resultGellAllUser = data;
    this.totalItems = this.resultGellAllUser.totalRows;
    this.users = data.result;
    // this.userService.getUsers(this.page, this.itemsPerPage).subscribe((data: UserGetAlReaponce) => {
    //   if (data != null) {
    //     this.resultGellAllUser = data;
    //     this.totalItems = this.resultGellAllUser.totalRows;
    //     this.users = data.result;
    //   }
    // });
  }

  edit(id) {

    this.router.navigate(['/user-add', id]);
  }
  add() {

    this.router.navigate(['/user-add', '0']);
  }
  preview(id) {


    this.router.navigate(['/user-profile', id]);
  }
}
