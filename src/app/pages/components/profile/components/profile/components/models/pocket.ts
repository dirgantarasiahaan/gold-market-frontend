import { Product } from "src/app/pages/components/products/models/product";

export interface Pocket{
  id: string
  pocketName: string
  pocketQty: number
  product: Product
}
