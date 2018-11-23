import {Component, Input, OnInit} from '@angular/core';
import {StockDataService} from "../stock-data.service";

@Component({
  selector: 'app-stock-list-element',
  templateUrl: './stock-list-element.component.html',
  styleUrls: ['./stock-list-element.component.css']
})
export class StockListElementComponent implements OnInit {

  @Input() stock: Object;
  @Input() stock_id: String;

  constructor(private data: StockDataService) { }

  ngOnInit() {
  }

  handleDeleteClick() {
    this.data.deleteStock(this.stock_id);
  }

  handleEditClick() {
    this.data.handleCloseStockForm();
    this.data.setEditMode(true);
    this.data.handleEditStockClicked(this.stock_id, this.stock);
  }

}
