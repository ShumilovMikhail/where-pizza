import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class ProfileHistoryService {

  constructor(private readonly store: Store) { }

  public addOrder() {

  }
}
