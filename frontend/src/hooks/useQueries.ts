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
        msgText = error.response.data;
      } else {
        msgText = error.response.data[0];
      }
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);

  }

  async function deleteProduct(id:string) {
    
    let msgType = 'success';

    const data = await api.delete(`/products/${id}`)
      .then((response) => {

        setTimeout(() => {
          window.location.reload();
        }, 3000);
        
        return response.data;
      })
      .catch((error: any) => {
        
        msgType = 'error';
        return error.response.data;

      });

    setFlashMessage(data.message, msgType);

  }

  return { createProduct, deleteProduct };

}
