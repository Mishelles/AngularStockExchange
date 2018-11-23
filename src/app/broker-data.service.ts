import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BrokerDataService {

  private brokersSubject: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  public brokersState: Observable<any> = this.brokersSubject.asObservable();

  private brokerFormOpenSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  public brokerFormOpenState: Observable<any> = this.brokerFormOpenSubject.asObservable();

  private brokerFormEditModeSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  public brokerFormEditModeState: Observable<any> = this.brokerFormEditModeSubject.asObservable();

  private brokerFormSubject: BehaviorSubject<Object> = new BehaviorSubject<Object>({
    name: "",
    image_url: "",
    hash_reserve: ""
  });

  public brokerFormState: Observable<any> = this.brokerFormSubject.asObservable();

  private editingBrokerId: String = null;

  constructor(private httpClient: HttpClient) {
    this.getBrokersDataFromBackend();
  }

  getBrokersDataFromBackend() {
    this.httpClient.get(BASE_URL + 'brokers').subscribe(value => {
      this.brokersSubject.next(value);
    });
  }

  deleteBroker(brokerId: String) {
    this.httpClient.post(BASE_URL + 'brokers/delete', {id: brokerId}).subscribe(value => {
      this.getBrokersDataFromBackend();
    });
  }

  setEditMode(mode: Boolean) {
    this.brokerFormEditModeSubject.next(mode);
  }

  handleAddBrokerClicked() {
    this.handleCloseBrokerForm();
    this.brokerFormOpenSubject.next(true);
  }

  handleEditBrokerClicked(brokerId: String, broker: Object) {
    this.brokerFormSubject.next(broker);
    this.brokerFormOpenSubject.next(true);
    this.editingBrokerId = brokerId;
  }

  handleCloseBrokerForm() {
    this.brokerFormOpenSubject.next(false);
    this.brokerFormSubject.next({
      name: "",
      image_url: "",
      hash_reserve: ""
    });
    this.setEditMode(false);
    this.editingBrokerId = null;
  }

  private sendNewBrokerDataToBackend(broker: Object) {
    this.httpClient.post(BASE_URL + 'brokers/create', broker).subscribe(value => {
      this.getBrokersDataFromBackend();
    });
  }

  private sendEditedBrokerDataToBackend(brokerId: String, broker: Object) {
    this.httpClient.post(BASE_URL + 'brokers/change', {id: brokerId, params: broker}).subscribe(value => {
      this.getBrokersDataFromBackend();
    });
  }

  saveForm(broker: Object) {
    console.log(broker);
    if (this.brokerFormEditModeSubject.getValue()) {
      this.sendEditedBrokerDataToBackend(this.editingBrokerId, broker);
    } else {
      this.sendNewBrokerDataToBackend(broker);
    }
    this.handleCloseBrokerForm();
  }

}
