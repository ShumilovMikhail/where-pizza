import { ProfileHistoryOrder } from "./profileHistoryOrder.interface";

export interface GetProfileHistoryResponse {
  orders: ProfileHistoryOrder[],
  count: number
};
