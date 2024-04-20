import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartTotalPriceSelector } from '../../../../shared/cart/store/selectors';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator } from '../../../../shared/utils/date.validator';
import { OrderFormDeliveryTypes } from './types/orderFormDeliveryTypes';
import { OrderFormDeliverTypes } from './types/orderFormDeliverTypes';
import { collectionTimeValidator } from './validators/collectionTime.validator';
import { OrderFormPaymentTypes } from './types/orderFormPaymentTypes';
import { OrderFormPaymentChangeTypes } from './types/orderFormPaymentChangeTypes';
import { OrderFormService } from './services/orderFormStore.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;

  totalPrice$: Observable<number>;

  constructor(private readonly store: Store, private fb: FormBuilder, private orderFormService: OrderFormService) { }

  ngOnInit(): void {
    this.totalPrice$ = this.store.select(cartTotalPriceSelector);
    this.initializeForm();
  };

  onSubmit(): void {
    this.orderFormService.sendOrderForm(this.form.value);
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      userInfo: new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(2)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
        date: new FormControl('', [dateValidator()])
      }),
      delivery: new FormGroup({
        type: new FormControl(OrderFormDeliveryTypes.DELIVERY),
        address: new FormGroup({
          street: new FormControl('', [Validators.required]),
          house: new FormControl('', [Validators.required]),
          approach: new FormControl('', [Validators.required]),
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
      }),
      payment: new FormGroup({
        type: new FormControl(OrderFormPaymentTypes.CASH),
        change: new FormGroup({
          type: new FormControl(OrderFormPaymentChangeTypes.WITHOUT_CHANGE),
          amount: new FormControl('', [Validators.required])
        })
      }),
      comment: new FormControl('')
    });
  };

};
