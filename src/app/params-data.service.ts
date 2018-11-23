import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ParamsDataService {

  private paramsSubject: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  public paramsState: Observable<any> = this.paramsSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getParamsFromBackend();
  }

  getParamsFromBackend() {
    this.httpClient.get(BASE_URL + 'params').subscribe(value => {
      this.paramsSubject.next(value);
    });
  }

  saveForm(formData: Object) {
    this.httpClient.post(BASE_URL + 'params/setParams', formData).subscribe(value => {
      this.getParamsFromBackend();
    });
  }
}
