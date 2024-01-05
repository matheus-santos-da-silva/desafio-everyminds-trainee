import { Decimal } from '@prisma/client/runtime/library';

export interface ProductProps {
  id: string
  code: string
  price: Decimal
  description: string
}