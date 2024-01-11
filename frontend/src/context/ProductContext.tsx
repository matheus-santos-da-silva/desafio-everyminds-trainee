import { createContext } from 'react';
import useCreateProduct, { CreateProductProps } from '../hooks/useCreateProduct';

type CreateProductType = ({ description, name, price }: CreateProductProps) => Promise<void>;

export const ProductContext = createContext<CreateProductType>({} as CreateProductType);

export function ProductProvider({ children }: any) {

  const { createProduct } = useCreateProduct();

  return (

    <ProductContext.Provider value={ createProduct }>
      { children }
    </ProductContext.Provider>

  );

}
