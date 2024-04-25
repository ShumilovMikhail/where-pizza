import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-toggler',
  templateUrl: './profile-toggler.component.html',
  styleUrl: './profile-toggler.component.scss'
})
export class ProfileTogglerComponent {
  private readonly router = inject(Router);
  readonly activatedRoute: string = this.router.url;
};
