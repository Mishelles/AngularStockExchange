import {Component, OnInit} from '@angular/core';
import {BrokerDataService} from "../broker-data.service";

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  brokers: Object;
  objectKeys = Object.keys;

  constructor(private data: BrokerDataService) {
  }

  ngOnInit() {
    this.data.brokersState.subscribe(value => {
      this.brokers = value;
    });
  }

  handleAddBroker() {
    this.data.handleAddBrokerClicked();
  }

}
