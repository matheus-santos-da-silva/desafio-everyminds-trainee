import api from '../utils/api';

// import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessages';

export interface Product {
  name: string
  price: number
  description: string
}

export default function useQueries() {

  const { setFlashMessage } = useFlashMessage();

  async function createProduct({
    description,
    name,
    price
  }: Product) {

    let msgText = 'Produto criado com sucesso';
    let msgType = 'sucess';

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
        msgText = error.response.data;
      } else {
        msgText = error.response.data[0];
      }
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);

  }

  return { createProduct };

}
