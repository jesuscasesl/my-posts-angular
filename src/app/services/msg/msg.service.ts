import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  isMsgOKServ = new Subject<Boolean>();
  isMsgErrorServ = new Subject<Boolean>();
  msgServ = new Subject<String>();

  constructor() { }

  showSuccess(): void{
    this.isMsgOKServ.next(true)
  }

  showError(): void{
    this.isMsgErrorServ.next(true)
  }

  hide(): void{
    this.isMsgOKServ.next(false)
    this.isMsgErrorServ.next(false)
  }
}
