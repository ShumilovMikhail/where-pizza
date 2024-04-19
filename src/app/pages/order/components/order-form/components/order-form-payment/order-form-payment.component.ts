import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderFormPaymentTypes } from '../../types/orderFormPaymentTypes';
import { OrderFormPaymentChangeTypes } from '../../types/orderFormPaymentChangeTypes';

@Component({
  selector: 'app-order-form-payment',
  templateUrl: './order-form-payment.component.html',
  styleUrl: './order-form-payment.component.scss'
})
export class OrderFormPaymentComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      type: new FormControl(OrderFormPaymentTypes.CASH),
      change: new FormGroup({
        type: new FormControl(OrderFormPaymentChangeTypes.WITHOUT_CHANGE),
        change: new FormControl('')
      })
    });
  };
};
