import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Product } from '../types/product.interface';
import { ProductsSettingsType } from '../types/productsSettings.type';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent implements OnInit {
  @Input('product') product: Product;
  @Input('categorySettings') categorySettings: ProductsSettingsType | null;

  form: FormGroup;
  totalPrice: number;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
  };

  onSubmit(): void {
    const product = {
      product: this.product,
      totalPrice: this.totalPrice,
      toppings: (this.form.value.toppings as Array<boolean>).reduce((accumulator, isChecked, index) => {
        return isChecked ? [...accumulator, this.product.toppings[index]] : accumulator;
      }, []),
      removeIngredients: (this.form.value.removeIngredients as Array<boolean>).reduce((accumulator, isChecked, index) => {
        return isChecked ? [...accumulator, this.product.removableIngredients[index]] : accumulator;
      }, []),
      settings: (this.form.value.settings as Array<string>).reduce((accumulator, value, index) => {
        const setting = {
          name: this.categorySettings[index].name,
          value: this.categorySettings[index].options.find((option) => option.option === value).option
        }
        return [...accumulator, setting]
      }, []),
    };
    console.log(product)
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
    this.form.valueChanges.subscribe(() => {
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
};
