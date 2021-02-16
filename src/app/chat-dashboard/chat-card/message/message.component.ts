import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() myMessage: boolean;
  @Input() message: Message;

  constructor() {}

  ngOnInit(): void {}
}
