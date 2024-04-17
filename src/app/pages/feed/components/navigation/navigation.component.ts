import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';

import { NavigationStoreService } from './services/navigation-store.service';
import { NavigationCategories } from './types/navigationCategories.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {

  categories: NavigationCategories;
  categoriesKeys: string[]

  constructor(private readonly navigationStore: NavigationStoreService) { };

  ngOnInit(): void {
    this.navigationStore.getCategories();
    this.navigationStore.categories$.pipe(
      filter(Boolean)
    ).subscribe((categories) => {
      this.categories = categories
      this.categoriesKeys = Object.keys(categories).sort((a, b) => categories[a].id - categories[b].id)
    })
  };

};
