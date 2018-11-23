import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrokersComponent } from './brokers/brokers.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { BrokerlistelementComponent } from './brokerlistelement/brokerlistelement.component';
import { BrokerFormComponent } from './broker-form/broker-form.component';
import {HttpClientModule} from "@angular/common/http";
import { StockListElementComponent } from './stock-list-element/stock-list-element.component';
import { StockFormComponent } from './stock-form/stock-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BrokersComponent,
    StockComponent,
    HomeComponent,
    BrokerlistelementComponent,
    BrokerFormComponent,
    StockListElementComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
