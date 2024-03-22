import { Component } from '@angular/core';

import { AuthTypes } from '../auth/types/authTypes';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  authType: AuthTypes = AuthTypes.REGISTER;
  modalOpen: boolean = true;

  onModalOpen() {
    this.modalOpen = true;
  };

  onModalClose(): void {
    this.modalOpen = false;
  };
};
