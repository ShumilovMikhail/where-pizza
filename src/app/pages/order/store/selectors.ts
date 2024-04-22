import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "../types/orderState.interface";

const orderFeature = createFeatureSelector<OrderState>('order');

export const isSuccessSelector = createSelector(orderFeature, (state: OrderState) => state.isSuccess)
