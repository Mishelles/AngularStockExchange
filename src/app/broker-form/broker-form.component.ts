import { Component, OnInit } from '@angular/core';
import {BrokerDataService} from "../broker-data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-broker-form',
  templateUrl: './broker-form.component.html',
  styleUrls: ['./broker-form.component.css']
})
export class BrokerFormComponent implements OnInit {

  formData: Object;
  isShown: Boolean;

  constructor(private data: BrokerDataService) { }

  ngOnInit() {
    this.data.brokerFormOpenState.subscribe(value => {
      this.isShown = value;
    });
    this.data.brokerFormState.subscribe(value => {
      this.formData = value;
    });
  }

  closeForm() {
    this.data.handleCloseBrokerForm();
  }

  onSubmit(f: NgForm) {
    this.data.saveForm({
      name: f.value.brokerName,
      cash_reserve: f.value.brokerCash,
      image_url: f.value.brokerImage
    });
  }

}
