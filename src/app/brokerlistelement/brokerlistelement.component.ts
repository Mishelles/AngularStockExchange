import { Component, OnInit, Input } from '@angular/core';
import {DataService} from "../data.service";
import {BrokerDataService} from "../broker-data.service";

@Component({
  selector: 'app-brokerlistelement',
  templateUrl: './brokerlistelement.component.html',
  styleUrls: ['./brokerlistelement.component.css']
})
export class BrokerlistelementComponent implements OnInit {

  @Input() broker: Object;
  @Input() broker_id: String;

  constructor(private data: BrokerDataService) { }

  ngOnInit() {
  }

  handleDeleteClick() {
    this.data.deleteBroker(this.broker_id);
  }

  handleEditClick() {
    this.data.handleCloseBrokerForm();
    this.data.setEditMode(true);
    this.data.handleEditBrokerClicked(this.broker_id, this.broker);
  }

}
