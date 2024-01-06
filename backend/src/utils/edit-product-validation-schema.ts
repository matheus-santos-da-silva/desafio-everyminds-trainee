import { z } from 'zod';

export const EditProductValidationSchema = z.object({

  name: z.string({
    required_error: 'O nome é obrigatório',
    invalid_type_error: 'O nome deve ser uma string'
  }),

  description: z.string({
    required_error: 'A descrição é obrigatória',
    invalid_type_error: 'A descrição deve ser uma string'
  }),

  price: z.number({
    required_error: 'O preço é obrigatório',
    invalid_type_error: 'O preço deve ser um number'
  })

});
