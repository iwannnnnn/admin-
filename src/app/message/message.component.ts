import { Component, OnInit } from '@angular/core';
import { MessageViewModel } from '../models/MessageViewModel';
import { MessageService } from '../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  request: MessageViewModel = {
    // tslint:disable-next-line:max-line-length
    messageText: 'Hello FullUserName,<br>We hear your request for help and <br>  we comming to CurrentUserLocation <br>ASAP!<br>Your WIT.'

  };
  editMode = false;
  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.messageService.getMessage().subscribe((responce) => {
      if (responce != null) {
        this.request = responce;
      }
    });
    console.log(this.request);

  }
  save() {
    this.messageService.save(this.request);
    this.editMode = false;
  }
  edit() {
    this.editMode = true;
    const el = document.getElementById('messageText');
    el.setAttribute('contenteditable', 'true');
    el.parentElement.setAttribute('cklass', 'Hello_FullUserName_Editmode');
  }
}
