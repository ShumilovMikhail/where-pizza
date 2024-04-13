import { Component, Input } from '@angular/core';
import { NavigationCategory } from '../../types/navigationCategory.interface';

@Component({
  selector: 'app-navigation-category',
  templateUrl: './navigation-category.component.html',
  styleUrl: './navigation-category.component.scss'
})
export class NavigationCategoryComponent {
  @Input('category') category: NavigationCategory;
  @Input('link') link: string
}
