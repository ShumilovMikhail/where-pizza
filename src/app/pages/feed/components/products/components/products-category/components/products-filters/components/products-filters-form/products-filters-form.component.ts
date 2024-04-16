import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription, filter } from "rxjs";

import { CategoryStoreService } from "../../../../services/category-store.service";
import { FiltersGroup } from "../../../../../../types/filtersGroup.interface";

@Component({
  selector: 'app-products-filters-form',
  templateUrl: './products-filters-form.component.html',
  styleUrl: './products-filters-form.component.scss'
})
export class ProductsFiltersFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  filtersSubscribe: Subscription;

  constructor(private readonly categoryStore: CategoryStoreService, private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.filtersSubscribe = this.categoryStore.filters$.pipe(filter(Boolean)).subscribe((filters) => {
      console.log(filters)
      this.form = this.fb.group({
        filters: new FormArray([])
      })
      filters.forEach((filter) => {
        const control = new FormControl(filter);
        (this.form.controls.filters as FormArray).push(control);
      });
    })
  };

  onFormGroupUpdate(filterGroup: FiltersGroup, index: number) {
    (this.form.get('filters') as FormArray).at(index).patchValue(filterGroup);
  };

  onApply() {
    this.categoryStore.applyFilters(this.form.value.filters);
  };

  onResetFilters(): void {
    this.categoryStore.resetFilters();
  };

  ngOnDestroy(): void {
    this.filtersSubscribe.unsubscribe()
  }

}
