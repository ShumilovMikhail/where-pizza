import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { dateValidator } from '../../../utils/date.validator';
import { setUserInfoAction } from '../../store/actions/set-user-info.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-set-user-info',
  templateUrl: './set-user-info.component.html',
  styleUrl: './set-user-info.component.scss'
})
export class SetUserInfoComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>

  constructor(private store: Store, private fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
  };

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(setUserInfoAction({ userInfo: this.form.value }));
    };
  };

  private initializeForm() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
      date: new FormControl('', [Validators.required, Validators.minLength(8), dateValidator()])
    });
  };
};
