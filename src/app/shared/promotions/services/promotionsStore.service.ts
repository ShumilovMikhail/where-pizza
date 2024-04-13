import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { PromotionsState } from "../types/promotionsState.interface";
import { Observable, switchMap, tap } from "rxjs";
import { PromotionsService } from "./promotions.service";
import { PromotionsType } from "../types/promotions.type";

const initialState: PromotionsState = {
  promotions: null
}

@Injectable({ providedIn: 'root' })
export class PromotionsStoreService extends ComponentStore<PromotionsState> {

  promotions$: Observable<PromotionsType> = this.select(state => state.promotions)

  constructor(private readonly promotionsService: PromotionsService) {
    super({ promotions: null });
  };

  readonly getPromotions = this.effect<void>((source$) => {
    return source$.pipe(
      switchMap(() => {
        return this.promotionsService.getPromotions().pipe(
          tap((promotions: PromotionsType) => {
            this.setPromotions(promotions);
          })
        );
      })
    );
  });

  readonly setPromotions = this.updater((state, promotions: PromotionsType) => ({
    ...state,
    promotions: promotions
  }));
};
