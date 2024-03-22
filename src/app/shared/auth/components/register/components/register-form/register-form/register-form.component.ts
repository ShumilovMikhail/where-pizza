import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendError } from '../../../../../../types/backedError.interface';
import { RegisterErrorsTypes } from '../../../../../types/registerErrorsTypes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../../../../utils/confirmPassword.validator';
import { RegisterForm } from '../../../types/registerForm.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  @Input('isLoading') isLoading: boolean;
  @Input('error') error: BackendError<RegisterErrorsTypes>;
  @Output('onSubmit') submitEvent = new EventEmitter<RegisterForm>()

  form: FormGroup;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
  };

  onSubmit() {
    if (this.form.valid) {
      this.form.markAsUntouched();
      this.submitEvent.emit(this.form.value)
    }
  };


  private initializeForm(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup({
        pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      }, confirmPasswordValidator())
    });
  };
};
