import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FiltersGroup } from "../../../../../../../../types/filtersGroup.interface";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Filter } from "../../../../../../../../types/filter.interface";
import { filter } from "rxjs";

@Component({
  selector: 'app-filters-group-form',
  templateUrl: './filters-group-form.component.html',
  styleUrl: './filters-group-form.component.scss'
})
export class FiltersGroupFormComponent implements OnInit {
  @Input('filtersGroup') filtersGroup: FiltersGroup;
  @Output('filterGroupUpdate') filterGroupUpdate = new EventEmitter<FiltersGroup>();
  form: FormGroup

  constructor(private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
    this.form.valueChanges.subscribe(() => {
      this.onFormUpdate()
    })
  };

  onFormUpdate(): void {
    this.filtersGroup = {
      name: this.form.value.name,
      filters: (this.form.value.filters as Array<boolean>).reduce((accumulator, isActivated, index) => {
        return [...accumulator, { filter: this.filtersGroup.filters[index].filter, isActivate: !!isActivated }];
      }, [])
    };
    this.filterGroupUpdate.emit(this.filtersGroup);
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      name: new FormControl(this.filtersGroup.name),
      filters: new FormArray([])
    });
    this.addControls()
  };

  private addControls(): void {
    this.filtersGroup.filters.forEach((filter: Filter) => {
      const control = new FormControl(filter.isActivate);
      (this.form.controls.filters as FormArray).push(control);
    });
  };
};
