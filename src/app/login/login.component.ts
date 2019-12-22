import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../models/LoginViewModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  data: LoginViewModel = {};
  message = 'Email or Password is incorrect.';
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  signnin() {
    this.userService.login(this.data).subscribe(res => {
      if (res != null) {
        localStorage.setItem('loginToken', res.loginToken);
        this.userService.currentUserSubject.next(res.loginToken);
        this.router.navigate(['/dashboard']);
      }
    }, ((er) => {
      if (er && er.error) {

        this.message = er.error.errorMessage;
        this.data.email = '';
        this.data.password = '';
      }
    }));

  }
}
