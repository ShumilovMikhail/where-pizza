import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrl: './side-modal.component.scss'
})
export class SideModalComponent {
  @Output('closeModal') closeModalEvent = new EventEmitter<boolean>();

  onClose(): void {
    this.closeModalEvent.emit(true);
  };
}
