import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output('closeModal') closeModalEvent = new EventEmitter<boolean>();

  onClose(): void {
    this.closeModalEvent.emit(true);
  };
};
