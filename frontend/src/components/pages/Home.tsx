import api from '../../utils/api';

import { formatCurrency } from '../../utils/format-currency';
import { deleteProduct } from '../../hooks/useDeleteProduct';

import { useState, useEffect } from 'react';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Products } from './protocols/Product';

function Home() {

  const [ products, setProducts ] = useState<Products[]>([]);

  useEffect(() => {

    api.get('/products/').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="product-table-container">
      <div className={styles.product_header}>
        <h1>Produtos</h1>
        <Link to='/products/create'>Cadastrar Produto</Link>
      </div>
      {products && products.length > 0 ? (
        <table className={styles.product_table}>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Código do Produto</th>
              <th className={styles.product_actions}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='bold'>{product.name}</td>
                <td>{formatCurrency(product.price)}</td>
                <td>{product.code}</td>
                <td className={ styles.actions_cell }>
                  <Link to={`/products/edit/${product.id}`}>Editar</Link>
                  <Link to={`/products/${product.id}`}>Detalhes</Link>
                  <button onClick={ () => {
                    deleteProduct(product.id);
                  } }>Excluir</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
}

export default Home;