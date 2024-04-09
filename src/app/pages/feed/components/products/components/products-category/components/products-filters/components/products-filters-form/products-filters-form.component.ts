import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription, filter, take } from "rxjs";

import { FiltersCategory } from "../../../../../../types/filtersCategory.type";
import { CategoryStoreService } from "../../../../services/categoryStore.service";
import { FiltersGroup } from "../../../../../../types/filtersGroup.interface";

@Component({
  selector: 'app-products-filters-form',
  templateUrl: './products-filters-form.component.html',
  styleUrl: './products-filters-form.component.scss'
})
export class ProductsFiltersFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input('isSubmitting') isSubmitting: boolean;
  @Output('filtersSubmit') filtersSubmit = new EventEmitter<FiltersCategory>()

  filters: FiltersCategory;
  form: FormGroup;
  filterSubscribe: Subscription;

  constructor(private readonly categoryStore: CategoryStoreService, private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeForm();
    this.addControls();
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSubmitting) {
      this.onSubmit()
    };
  };

  onSubmit(): void {
    this.filtersSubmit.emit(this.form.value.filters);
  };

  onFormGroupUpdate(filterGroup: FiltersGroup, index: number) {
    (this.form.get('filters') as FormArray).at(index).patchValue(filterGroup);
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      filters: new FormArray([])
    })
  };

  private addControls() {
    this.filters.forEach((filter) => {
      const control = new FormControl(filter);
      (this.form.controls.filters as FormArray).push(control);
    });
  };

  private initializeListeners(): void {
    this.filterSubscribe = this.categoryStore.filters$.pipe(filter(Boolean)).subscribe((filters) => {
      this.filters = filters
    });
  };

  ngOnDestroy(): void {
    this.filterSubscribe.unsubscribe()
  }


}
