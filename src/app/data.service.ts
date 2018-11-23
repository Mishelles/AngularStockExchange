import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  brokers: any;
  brokersChange: Subject<Array<Object>> = new Subject<Array<Object>>();

  constructor() {
    this.brokers = this.getBrokersDataFromBackend()
  }

  deleteBroker(id) {
    this.brokers.push({
      id: '12345888',
      name: 'Михаил Сергеенков',
      image_url: 'https://pp.userapi.com/c850128/v850128336/59853/QWTKRH-15Dk.jpg',
      cash_reserve: '500'
    })
    this.brokersChange.next(this.brokers);
  }

  getBrokersDataFromBackend() {
    return [
      {
        id: '12345',
        name: 'Михаил Сергеенков',
        image_url: 'https://pp.userapi.com/c850128/v850128336/59853/QWTKRH-15Dk.jpg',
        cash_reserve: '500'
      },
      {
        id: '12346',
        name: 'Михаил Сергеенков 1',
        image_url: 'https://pp.userapi.com/c850128/v850128336/59853/QWTKRH-15Dk.jpg',
        cash_reserve: '500'
      },
      {
        id: '12347',
        name: 'Михаил Сергеенков 2',
        image_url: 'https://pp.userapi.com/c850128/v850128336/59853/QWTKRH-15Dk.jpg',
        cash_reserve: '500'
      }
    ]
  }
}
