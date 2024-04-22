import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-accepted',
  templateUrl: './order-accepted.component.html',
  styleUrl: './order-accepted.component.scss'
})
export class OrderAcceptedComponent {

  orderNumber: string = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) { };
}
