import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Output() reault: EventEmitter<number> = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  confirm() {
    this.reault.emit(1);
    this.activeModal.close(1);

  }
  cancel() {
    this.reault.emit(0);
    this.activeModal.close(0);
  }
}
