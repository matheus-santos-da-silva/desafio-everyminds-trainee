import { Decimal } from '@prisma/client/runtime/library';

export const productMock = {
  id: '1',
  code: '1',
  name: 'team-shirt',
  description: 'description-test',
  price: new Decimal(150)
};

export const productMock1 = {
  id: '2',
  code: '2',
  name: 'team-shirt2',
  description: 'description-test2',
  price: new Decimal(150)
};