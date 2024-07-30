import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private socket: Socket;
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  private allDataSubject = new BehaviorSubject<any>(null);
  public allData$ = this.allDataSubject.asObservable();

  constructor() {
    this.socket = io('http://localhost:4000');

    this.socket.on('updateData', (data: any) => {
      this.dataSubject.next(data);
    });
  }

  updateData(newData: any) {
    this.socket.emit('updateData', newData);
  }

  getAllData() {
    this.socket.emit('getAllData');
  }
}
