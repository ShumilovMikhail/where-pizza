import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Product } from '../types/product.interface';
import { ProductsSettingsType } from '../types/productsSettings.type';
import { CustomProductSetting } from '../types/customProductSetting.interface';
import { addProductAction } from '../cart/store/actions/addProduct.action';
import { ProductFormAdapterService } from './services/product-form-adapter.service';
import { ProductForm } from './types/productForm.interface';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent implements OnInit, OnDestroy {
  @Input('product') product: Product;
  @Input('categorySettings') categorySettings: ProductsSettingsType | null;

  form: FormGroup;
  totalPrice: number;
  valueChangesSubscription: Subscription;

  constructor(private fb: FormBuilder, private readonly store: Store, private productFormAdapterService: ProductFormAdapterService) { };

  ngOnInit(): void {
    this.initializeForm();
  };

  onSubmit(): void {
    const productForm: ProductForm = {
      totalPrice: this.totalPrice,
      toppings: this.form.value.toppings,
      removeIngredients: this.form.value.removeIngredients,
      settings: (this.form.value.settings as Array<string>).reduce((accumulator, value, index) => {
        const setting: CustomProductSetting = {
          name: this.categorySettings[index].name,
          value: this.categorySettings[index].options.find((option) => option.option === value).option
        }
        return [...accumulator, setting]
      }, []),
    };
    this.store.dispatch(addProductAction({ customProduct: this.productFormAdapterService.toCustomProduct(this.product, productForm) }))
  };

  get settings(): FormArray {
    return this.form.get('settings') as FormArray;
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      removeIngredients: new FormArray([]),
      toppings: new FormArray([]),
      settings: new FormArray([])
    });
    this.addControls();
    this.totalPrice = this.product.price;
    this.initializeListeners()
  };

  private addControls(): void {
    this.product.removableIngredients?.forEach((removableIngredient) => {
      const control = new FormControl();
      (this.form.controls.removeIngredients as FormArray).push(control);
    });
    this.product.toppings?.forEach((topping) => {
      const control = new FormControl();
      (this.form.controls.toppings as FormArray).push(control);
    });
    this.categorySettings?.forEach((setting, index) => {
      const control = new FormControl(setting.options[0].option);
      (this.form.controls.settings as FormArray).push(control);
    })
  };


  private initializeListeners() {
    this.valueChangesSubscription = this.form.valueChanges.subscribe(() => {
      this.changePrice()
    });
  };


  private changePrice(): void {
    const toppingsPrice = (this.form.value.toppings as Array<boolean>).reduce((accumulator, isChecked, index) => {
      return isChecked ? accumulator + this.product.toppings[index].price : accumulator
    }, 0)

    const settingsPrice = (this.form.value.settings as Array<string>).reduce((accumulator, value, index) => {
      return accumulator + +this.categorySettings[index].options.find((option) => option.option === value).price
    }, 0)

    this.totalPrice = this.product.price + toppingsPrice + settingsPrice;
  };

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  };
};
