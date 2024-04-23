import { ProfileHistoryOrder } from "./profileHistoryOrder.interface"

export interface ProfileHistoryState {
  orders: ProfileHistoryOrder[]
  isLoading: boolean
  error: string | null
};
