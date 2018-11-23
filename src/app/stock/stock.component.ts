import { Component, OnInit } from '@angular/core';
import {StockDataService} from "../stock-data.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Object;
  objectKeys = Object.keys;

  constructor(private data: StockDataService) { }

  ngOnInit() {
    this.data.stockState.subscribe(value => {
      this.stock = value;
    });
  }

  handleAddStock() {
    this.data.handleAddStockClicked();
  }

}
