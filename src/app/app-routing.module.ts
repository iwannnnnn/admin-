import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'message', component: MessageComponent },
  { path: 'user-add/:id', component: UserAddComponent},
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
