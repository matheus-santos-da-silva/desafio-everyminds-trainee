import { z } from 'zod';

export const CreateProductValidation = z.object({

  name: z.string({
    required_error: 'O nome é obrigatório',
    invalid_type_error: 'O nome deve ser uma string'
  }).min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),

  description: z.string({
    required_error: 'A descrição é obrigatória',
    invalid_type_error: 'A descrição deve ser uma string'
  }).min(3, { message: 'A descrição deve ter pelo menos 3 caracteres' }),

  price: z.number({
    required_error: 'O preço é obrigatório',
    invalid_type_error: 'O preço deve ser um number'
  })
});
