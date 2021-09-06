import { Component, OnInit } from '@angular/core';
import { AlertMessagesService } from './alert-messages.service';

@Component({
  selector: 'alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.scss']
})
export class AlertMessagesComponent implements OnInit {

  constructor(public service: AlertMessagesService) { }

  ngOnInit(): void {
  }

}
