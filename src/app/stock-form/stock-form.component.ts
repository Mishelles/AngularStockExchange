import { Component, OnInit } from '@angular/core';
import {StockDataService} from "../stock-data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formData: Object;
  isShown: Boolean;

  constructor(private data: StockDataService) { }

  ngOnInit() {
    this.data.stockFormOpenState.subscribe(value => {
      this.isShown = value;
    });
    this.data.stockFormState.subscribe(value => {
      this.formData = value;
    });
  }

  closeForm() {
    this.data.handleCloseStockForm();
  }

  onSubmit(f: NgForm) {
    this.data.saveForm({
      title: f.value.stockTitle,
      distribution: f.value.stockDistribution,
      quantity: f.value.stockQuantity,
      max_value: f.value.stockMaxValue,
      starting_price: f.value.stockStartingPrice
    });
  }

}
