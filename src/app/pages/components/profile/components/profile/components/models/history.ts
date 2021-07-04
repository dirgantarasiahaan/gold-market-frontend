import { PurchaseDetails } from "./purchase-details";

export interface History {
  id: string,
  purchaseDate: string,
  purchaseType: string,
  purchaseDetails: PurchaseDetails[]
}
