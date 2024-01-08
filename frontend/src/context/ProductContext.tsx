import { createContext } from 'react';
import useQueries, { Product } from '../hooks/useQueries';

type CreateProductType = ({ description, name, price }: Product) => Promise<void>;

export const ProductContext = createContext<CreateProductType>({} as CreateProductType);

export function ProductProvider({ children }: any) {

  const { createProduct } = useQueries() ;

  return (

    <ProductContext.Provider value={ createProduct }>
      { children }
    </ProductContext.Provider>

  );

}
