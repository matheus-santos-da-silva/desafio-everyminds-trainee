import Input from '../form/Input';
import styles from '../form/Form.module.css';
import { useContext, useState } from 'react';

import { CreateProductProps } from '../../hooks/useCreateProduct';

import { ProductContext } from '../../context/ProductContext';

function CreateProduct() {

  const [ product, setProduct ] = useState<CreateProductProps>({ name: '', price: 0, description: '' }); 
  const createProduct = useContext(ProductContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createProduct({
      description: product.description,
      name: product.name,
      price: Number(product.price)
    });
  }

  return (
    <section className={styles.form_container}>
      <h1>Criar Produto</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text='Nome'
          name='name'
          type='text'
          placeholder='Digite o nome do produto'
          handleOnChange={handleChange}
        />

        <Input
          text='Preço'
          name='price'
          type='number'
          placeholder='Digite o preço do produto'
          handleOnChange={handleChange}
        />
        <Input
          text='Descrição'
          name='description'
          type='text'
          placeholder='Digite a descrição do produto'
          handleOnChange={handleChange}
        />
        <input type="submit" value="Criar Produto"/>
      </form>
    </section>
  );
}

export default CreateProduct;