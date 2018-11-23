import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BrokersComponent} from "./brokers/brokers.component";
import {StockComponent} from "./stock/stock.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brokers', component: BrokersComponent},
  {path: 'stock', component: StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
