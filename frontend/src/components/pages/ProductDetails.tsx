import api from '../../utils/api';
import { Products } from './protocols/Product';

import { formatCurrency } from '../../utils/format-currency';

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './ProductDetails.module.css';

function ProductDetails() {

  const [ product, setProduct ] = useState<Products>({ 
    code: '',
    description: '',
    id: '',
    name: '',
    price: 0
  });

  const { id } = useParams();

  useEffect(() => {

    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });

  });

  return (
    <>
    
      {product.name  && (

        <section className={styles.product_details_container}>
          <div className={styles.product_details_header}>
            <h1> {product.name} </h1>
          </div>
        
          <div className={styles.product_details_content}>

            <h2>Informações do produto</h2>

            <p>
              <span className='bold'>Preço:</span> { formatCurrency(product.price) }
            </p>

            <p>
              <span className='bold'>Código do Produto: </span>{ product.code }
            </p>
            <div >
              <p>
                <span className='bold'>Descrição: </span>{ product.description }
              </p>
            </div>
            <div className={styles.product_details_actions}>
              <Link to={`/products/edit/${product.id}`}>Editar</Link>
              <Link to={'/'}>Voltar</Link>
            </div>
          </div>

        </section>

      )}  
    </>
  );

}

export default ProductDetails;