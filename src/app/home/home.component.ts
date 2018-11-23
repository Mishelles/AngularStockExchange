import {Component, OnInit} from '@angular/core';
import {ParamsDataService} from "../params-data.service";
import DateTimeFormat = Intl.DateTimeFormat;
import {NgForm} from "@angular/forms";
import * as moment from 'moment';

const DATETIME_FORMAT = 'YYYY-MM-DDThh:mm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  start_datetime: String = "";
  end_datetime: String = "";
  timeout: String = "";

  constructor(private data: ParamsDataService) {
  }

  ngOnInit() {
    this.data.paramsState.subscribe(value => {
      this.start_datetime = moment(new Date(parseInt(value.start_datetime))).format(DATETIME_FORMAT);
      this.end_datetime = moment(new Date(parseInt(value.end_datetime))).format(DATETIME_FORMAT);
      const duration = moment.duration(parseInt(value.timeout));
      this.timeout = HomeComponent.addZeroToTimePart(duration.hours().toString()) + ":"
        + HomeComponent.addZeroToTimePart(duration.minutes().toString()) + ":" +
        HomeComponent.addZeroToTimePart(duration.seconds().toString());
    });
  }

  static addZeroToTimePart(timepart: String) {
    if (timepart.length < 2) {
      return "0" + timepart;
    }
    return timepart;
  }

  static parseTimeout(timeout: String) {
    const splitted = timeout.split(":");
    const hours = parseInt(splitted[0]) * 60 * 60 * 1000;
    const mins = parseInt(splitted[1]) * 60 * 1000;
    const secs = parseInt(splitted[2]) * 1000;
    return hours + mins + secs;
  }

  getCurrentDatetime() {
    return moment(new Date()).format(DATETIME_FORMAT);
  }

  onSubmit(f: NgForm) {
    this.data.saveForm({
      start_datetime: moment(f.value.startDatetime, DATETIME_FORMAT).valueOf(),
      end_datetime: moment(f.value.endDatetime, DATETIME_FORMAT).valueOf(),
      timeout: HomeComponent.parseTimeout(f.value.timeoutField)
    });
  }

}
