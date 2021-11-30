import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoadingServ = new Subject<Boolean>();

  constructor() { }

  show(): void{
    this.isLoadingServ.next(true)
  }
  hide(): void{
    this.isLoadingServ.next(false)
  }
}
