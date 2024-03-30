import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sendVerificationEmailAction } from './store/actions/send-verification-email.action';
import { getUserDataAction } from '../auth/store/actions/get-user-data.action';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrl: './verification-email.component.scss'
})
export class VerificationEmailComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(sendVerificationEmailAction());
  };

  onClick(): void {
    this.store.dispatch(getUserDataAction());
  };

};
