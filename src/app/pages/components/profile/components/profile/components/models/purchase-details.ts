import { Pocket } from "./pocket";

export interface PurchaseDetails{
  id: string,
  price: number,
  quantityInGram: number,
  pocket: Pocket
}
