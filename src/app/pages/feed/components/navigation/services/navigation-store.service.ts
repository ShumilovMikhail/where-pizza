import { Injectable } from "@angular/core";
import { NavigationState } from "../types/navigationState.interface";
import { ComponentStore } from "@ngrx/component-store";
import { NavigationCategories } from "../types/navigationCategories.interface";
import { Observable, switchMap, tap } from "rxjs";
import { NavigationService } from "./navigation.service";

const initialState: NavigationState = {
  categories: null
}

@Injectable({ providedIn: 'root' })
export class NavigationStoreService extends ComponentStore<NavigationState> {

  categories$: Observable<NavigationCategories> = this.select(state => state.categories)

  constructor(private readonly navigationService: NavigationService) {
    super(initialState);
  };

  readonly getCategories = this.effect<void>((source$) => {
    return source$.pipe(
      switchMap(() => {
        return this.navigationService.getCategories().pipe(
          tap((categories: NavigationCategories) => {
            this.setCategories(categories);
          })
        );
      })
    );
  });

  readonly setCategories = this.updater((state, categories: NavigationCategories) => ({
    ...state,
    categories: categories
  }));
};
