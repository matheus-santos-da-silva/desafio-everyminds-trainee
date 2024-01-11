import api from '../utils/api';

import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessages';

export interface CreateProductProps {
  name: string
  price: number
  description: string
}

export default function useCreateProduct() {

  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  async function createProduct({
    description,
    name,
    price
  }: CreateProductProps) {

    let msgText = 'Produto criado com sucesso';
    let msgType = 'success';

    try {
      const data = await api.post('/products/create', {
        description,
        name,
        price
      }).then((response) => {
        return response.data;
      });

      console.log(data);

    } catch (error: any) {

      if(error.response.data.length > 2) {
        msgType = 'error';
        msgText = error.response.data;
      } else {
        msgType = 'error';
        msgText = error.response.data[0];
      }

    }

    setFlashMessage(msgText, msgType);
    if(msgType === 'success') navigate('/');
  }

  return { createProduct };
}
