import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MessageComponent } from './message/message.component';
import { UserAddComponent } from './user-add/user-add.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';


@NgModule({
  entryComponents: [ConfirmDeleteComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    MessageComponent,
    UserAddComponent,
    NavMenuComponent,
    ConfirmDeleteComponent
  ],
  imports: [NgbModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
