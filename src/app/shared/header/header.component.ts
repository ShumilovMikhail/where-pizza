import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { cartTotalPriceSelector } from "../cart/store/selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  totalPrice$: Observable<number>;
  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.totalPrice$ = this.store.select(cartTotalPriceSelector);
  };
};
