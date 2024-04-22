import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderAcceptedComponent } from "./order-accepted.component";

const routes: Routes = [
  { path: 'order-accepted/:id', component: OrderAcceptedComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OrderAcceptedRouting { };
