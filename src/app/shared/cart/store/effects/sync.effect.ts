import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { resetCartAction, setProductsAction } from "../actions/sync.action";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";

@Injectable()
export class SyncEffect {

  afterResetCart = createEffect(() => this.actions$.pipe(
    ofType(resetCartAction),
    tap(() => {
      this.dataStorage.removeItem(DataStorageTypes.CART_PRODUCTS);
    })
  ), { dispatch: false });

  setResetCart = createEffect(() => this.actions$.pipe(
    ofType(setProductsAction),
    tap(({ cartProducts }) => {
      this.dataStorage.setItem(DataStorageTypes.CART_PRODUCTS, cartProducts);
    })
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private dataStorage: DataStorageService) { };
};
