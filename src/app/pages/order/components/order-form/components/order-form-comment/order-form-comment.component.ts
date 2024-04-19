import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form-comment',
  templateUrl: './order-form-comment.component.html',
  styleUrl: './order-form-comment.component.scss'
})
export class OrderFormCommentComponent {

  @Input('formGroup') form: FormGroup;

};
