import { useEffect, useState } from 'react';
import styles from '../form/Form.module.css';
import Input from '../form/Input';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import { CreateProductProps } from '../../hooks/useCreateProduct';
import useFlashMessage from '../../hooks/useFlashMessages';
import { useNavigate } from 'react-router-dom';

function EditProduct() {

  const { setFlashMessage } = useFlashMessage();
  const [ product, setProduct ] = useState<CreateProductProps>({ name: '', price: 0 , description: ''});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    
    api.get(`products/${id}`)

      .then((response) => {
        setProduct(response.data);
        return response.data;
      })
      .catch((error: any) => {
        console.log(error);
      });

  },[]);

  async function updateProduct(product: any) {
    let msgType = 'success';
    let msgText = 'Produto editado com sucesso';

    product.price = parseFloat(product.price);

    await api.patch(`/products/edit/${id}`, product)
      .then((response) => {
        return response.data;
      })
      .catch((error: any) => {

        if(error.response.data.length > 2) {

          msgType = 'error';
          msgText = error.response.data;
          return;

        } else {

          msgType = 'error';
          msgText = error.response.data[0];
          return;
        }
      });

    setFlashMessage(msgText, msgType);
    if(msgType === 'success') navigate('/');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateProduct(product);
  }

  return(

    <section className={styles.form_container}>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>

        <Input
          text='Nome'
          name='name'
          type='text'
          placeholder='Digite o nome do produto'
          value={ product.name }
          handleOnChange={handleChange}
        />

        <Input
          text='Preço'
          name='price'
          type='number'
          value={ product.price }
          placeholder='Digite o preço do produto'
          handleOnChange={handleChange}
        />

        <Input
          text='Descrição'
          name='description'
          type='text'
          value={ product.description }
          placeholder='Digite a descrição do produto'
          handleOnChange={handleChange}
        />

        <input type="submit" value="Editar"/>
      </form>
    </section>

  );

} 

export default EditProduct;