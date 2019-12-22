import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProfileUpdateModel } from '../models/ProfileUpdateModel';
import { GetUserModel } from '../models/GetUserModel';
import { User } from '../models/User';
import { UserconnectionService } from '../services/userconnection.service';
import { AddConnectionViewModel } from '../models/AddConnectionViewModel';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  selectedConectedIndex: number;
  permissionData: { id: number; name: string; }[];
  data: User = {};
  form: FormGroup;
  selectedPermission: number;
  requestRegister: RegisterViewModel;
  requestProfileUpdate: ProfileUpdateModel;
  Id: any;
  load = false;
  conectionusers: User[] = [];
  notconectionusers: User[] = [];
  connection: User;
  removeConnection: User;
  selectedIndex: number;
  addconnection: AddConnectionViewModel;
  addNew = false;
  faArrowLeft: any;
  faArrowRight: any;
  saveCaption: string;
  btnClass: string;
  isActive: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private fb: FormBuilder, private userconnectionService: UserconnectionService) {


    this.faArrowLeft = faArrowLeft;
    this.faArrowRight = faArrowRight;

    this.permissionData = [{ id: 1, name: 'Admin' }, { id: 2, name: 'User' }];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.Id = id;
      // tslint:disable-next-line:triple-equals
      this.addNew = this.Id == '0';
    }
    this.saveCaption = this.addNew ? 'Add' : 'Save';
    this.btnClass = this.addNew ? '' : 'savebtn';
  }

  ngOnInit() {

    // tslint:disable-next-line:triple-equals
    if (this.addNew) {

      this.form = this.fb.group({
        firstname: [this.data.firstname, Validators.required],
        lastname: [this.data.lastname, Validators.required],
        email: [this.data.email, Validators.required],
        phone: [this.data.phone, Validators.required],
        pinCode: [this.data.pinCode, Validators.required],
        password: this.data.password,
        permission: ''
      });
      this.isActive = true;
      this.load = true;
    } else {

      this.userService.get(this.Id).subscribe((respoce: GetUserModel) => {
        //  console.log(respoce);
        this.data.firstname = respoce.firstName;
        this.data.lastname = respoce.lastName;
        this.data.permission = respoce.userType;
        this.data.userStatus = respoce.userStatus;
        this.data.email = respoce.userName;
        this.data.phone = respoce.phone;


        this.form = this.fb.group({

          firstname: [this.data.firstname, Validators.required],
          lastname: [this.data.lastname, Validators.required],
          email: [this.data.email, Validators.required],
          phone: [this.data.phone, Validators.required],
          pinCode: '',
          password: '',
          permission: this.data.permission
        });
        this.isActive = respoce.userStatus === 1;
        this.userconnectionService.getNotConnectedUsers(this.Id).subscribe((responce: any) => {

          if (responce != null) {
            responce.forEach((element: User) => {

              this.notconectionusers.push(element);
            });

          }
        });

        this.userconnectionService.getConnectedUsers(this.Id).subscribe((responce: any) => {

          if (responce != null) {
            responce.forEach((element: User) => {

              this.conectionusers.push(element);
            });
          }
        });

        this.load = true;
      });
    }

  }
  save() {
    // const el = document.getElementById('chstatus') as HTMLInputElement;

    let status = 0;
    if (this.isActive) {
      status = 1;
    }
    // if (el.checked) {
    //   status = 1;
    // }

    if (this.addNew) {
      this.requestRegister = {
        userinfo: {
          email: this.data.email,
          firstname: this.data.firstname,
          lastname: this.data.lastname,
          password: this.data.password,
          permission: this.data.permission,
          phone: this.data.phone,
          pinCode: this.data.pinCode,
          status
        },
        requestdateUTC: new Date().toDateString()
      };
      this.userService.register(this.requestRegister).subscribe(res => {
        this.Id = res;

        this.userconnectionService.getNotConnectedUsers(this.Id).subscribe((responce: any) => {
          if (responce != null) {
            responce.forEach((element: User) => {
              this.notconectionusers.push(element);
            });
          }

          this.router.navigate(['/dashboard']);
        });

      });
    } else {
      this.requestProfileUpdate = {

        email: this.data.email,
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        password: this.data.password,
        userType: this.data.permission,
        phone: this.data.phone,
        pinCode: this.data.pinCode,
        userStatus: status
      };

      this.userService.update(this.Id, this.requestProfileUpdate);
      this.router.navigate(['/dashboard']);
    }

  }
  delete() {
    this.userService.delete(this.Id);
    this.router.navigate(['/dashboard']);
  }
  setconnection(user: User, i: number) {
    this.selectedIndex = i;
    this.connection = user;
  }
  setremoveconnection(user: User, i: number) {
    this.removeConnection = user;

    this.selectedConectedIndex = i;
  }
  adduserConnectio() {
    if (this.connection != null) {

      // tslint:disable-next-line:triple-equals
      this.notconectionusers = this.notconectionusers.filter(obj => obj.id != this.connection.id);
      this.conectionusers.push(this.connection);

      this.addconnection = {
        userId: this.Id,
        conectionId: this.connection.id
      };
      this.userconnectionService.add(this.addconnection);
      this.connection = null;
    }
  }
  removeUserConnectio() {
    if (this.removeConnection != null) {
      // tslint:disable-next-line:triple-equals
      this.conectionusers = this.conectionusers.filter(obj => obj.id != this.removeConnection.id);
      this.notconectionusers.push(this.removeConnection);
      this.userconnectionService.remove(this.Id, this.removeConnection.id);
      this.removeConnection = null;
    }
  }
}
