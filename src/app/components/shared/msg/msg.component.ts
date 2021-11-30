import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/services/msg/msg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  showMsgOK = this.msgService.isMsgOKServ
  showMsgError = this.msgService.isMsgErrorServ

  constructor(private msgService: MsgService) { }

  ngOnInit(): void { }
}
