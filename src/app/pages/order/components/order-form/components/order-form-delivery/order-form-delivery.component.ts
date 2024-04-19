import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OrderFormDeliveryTypes } from '../../types/orderFormDeliveryTypes';
import { OrderFormDeliverTypes } from '../../types/orderFormDeliverTypes';
import { UtilsService } from '../../../../../../shared/utils/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-form-delivery',
  templateUrl: './order-form-delivery.component.html',
  styleUrl: './order-form-delivery.component.scss'
})
export class OrderFormDeliveryComponent implements OnInit, OnDestroy {

  @Input('formGroup') form: FormGroup;
  customPatterns: unknown;
  valueChangesSubscription: Subscription;

  constructor(private readonly utilsService: UtilsService) { };

  ngOnInit(): void {
    this.initializeListeners()
    this.customPatterns = this.utilsService.customPatterns;
    this.editFormControls()
  };

  private initializeListeners(): void {
    this.valueChangesSubscription = this.form.valueChanges.subscribe((): void => {
      this.editFormControls();
    });

  };

  private editFormControls(): void {
    const addressControl = this.form.get('address');
    const collectionControl = this.form.get('deliver').get('collection');
    this.form.get('type').value !== OrderFormDeliveryTypes.DELIVERY ? addressControl.disable({ emitEvent: false }) : addressControl.enable({ emitEvent: false });
    this.form.get('deliver').get('type').value !== OrderFormDeliverTypes.ON_TIME ? collectionControl.disable({ emitEvent: false }) : collectionControl.enable({ emitEvent: false });
  };

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  };

};
