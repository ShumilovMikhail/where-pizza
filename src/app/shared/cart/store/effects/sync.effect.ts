import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { resetCartAction } from "../actions/sync.action";
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

  constructor(private readonly actions$: Actions, private dataStorage: DataStorageService) { };
};
