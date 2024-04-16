import { Component, OnInit } from '@angular/core';
import { NavigationStoreService } from './services/navigation-store.service';
import { Observable, filter, take, tap } from 'rxjs';
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
      filter((categories) => {
        console.log(categories)
        return Boolean(categories)
      }),
      take(1)
    ).subscribe((categories) => {
      this.categories = categories
      this.categoriesKeys = Object.keys(categories)
    })
  };

};
