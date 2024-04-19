import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form-comment',
  templateUrl: './order-form-comment.component.html',
  styleUrl: './order-form-comment.component.scss'
})
export class OrderFormCommentComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      comment: new FormControl('')
    });
  };
};
