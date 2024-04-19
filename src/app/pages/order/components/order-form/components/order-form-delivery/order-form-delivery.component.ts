import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { OrderFormDeliveryTypes } from '../../types/orderFormDeliveryTypes';
import { OrderFormDeliverTypes } from '../../types/orderFormDeliverTypes';
import { collectionTimeValidator } from './validators/collectionTime.validator';
import { UtilsService } from '../../../../../../shared/utils/utils.service';
import { NgxMaskPatterns } from '../../../../../../shared/types/ngxMaskPatterns.interface';

@Component({
  selector: 'app-order-form-delivery',
  templateUrl: './order-form-delivery.component.html',
  styleUrl: './order-form-delivery.component.scss'
})
export class OrderFormDeliveryComponent implements OnInit {

  form: FormGroup;
  customPatterns: NgxMaskPatterns;

  constructor(private readonly fb: FormBuilder, private readonly utilsService: UtilsService) { };

  ngOnInit(): void {
    this.initializeForm();
    this.customPatterns = this.utilsService.customPatterns
    this.form.valueChanges.subscribe(() => {

      console.log(this.form.valid)
    })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      type: new FormControl(OrderFormDeliveryTypes.DELIVERY),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        house: new FormControl(''),
        approach: new FormControl(''),
        floor: new FormControl(''),
        flat: new FormControl('')
      }),
      deliver: new FormGroup({
        type: new FormControl(OrderFormDeliverTypes.SOON),
        collection: new FormGroup({
          date: new FormControl(''),
          time: new FormControl('')
        }, [collectionTimeValidator()])
      })
    });
  };

};
