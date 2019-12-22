import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  login: boolean;
  constructor(private router: Router, private userService: UserService) {


    userService.currentUser.subscribe(x => {
      this.login = x != null && x !== undefined && x !== '';
    });

  }

  ngOnInit() {
  }
  signout() {
    // localStorage.clear();

    // this.router.navigate(['/login']);
    this.userService.logout().subscribe(s => {
      localStorage.clear();

      this.router.navigate(['/login']);
      this.userService.currentUserSubject.next('');
    });
  }
}
