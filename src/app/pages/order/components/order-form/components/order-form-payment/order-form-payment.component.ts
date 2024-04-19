import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { OrderFormPaymentTypes } from '../../types/orderFormPaymentTypes';
import { OrderFormPaymentChangeTypes } from '../../types/orderFormPaymentChangeTypes';

@Component({
  selector: 'app-order-form-payment',
  templateUrl: './order-form-payment.component.html',
  styleUrl: './order-form-payment.component.scss'
})
export class OrderFormPaymentComponent implements OnInit, OnDestroy {

  @Input('formGroup') form: FormGroup;
  valuesChangesSubscription: Subscription;

  constructor(private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeListeners();
    this.editFormControls()
  };

  private initializeListeners(): void {
    this.valuesChangesSubscription = this.form.valueChanges.subscribe(() => {
      this.editFormControls()
    });
  };

  private editFormControls(): void {
    const amountControl = this.form.get('change').get('amount');
    const changeControl = this.form.get('change');
    this.form.get('type').value === OrderFormPaymentTypes.CASH ? changeControl.enable({ emitEvent: false }) : changeControl.disable({ emitEvent: false });
    this.form.get('change').get('type').value === OrderFormPaymentChangeTypes.WITH_CHANGE ? amountControl.enable({ emitEvent: false }) : amountControl.disable({ emitEvent: false });
  }

  ngOnDestroy(): void {
    this.valuesChangesSubscription.unsubscribe();
  };
};
