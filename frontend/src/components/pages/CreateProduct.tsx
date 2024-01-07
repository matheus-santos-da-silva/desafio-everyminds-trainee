import Input from '../form/Input';

function CreateProduct() {

  function handleChange(e: unknown) {
    console.log('');
  }

  return (
    <section>
      <h1>CreateProduct</h1>
      <form>
        <Input
          text='Nome'
          name='name'
          type='text'
          placeholder='Digite o nome do produto'
          value=''
          handleOnChange={handleChange}
        />

        <Input
          text='Preço'
          name='price'
          type='number'
          placeholder='Digite o preço do produto'
          value=''
          handleOnChange={handleChange}
        />

        <Input
          text='Descrição'
          name='description'
          type='text'
          placeholder='Digite a descrição do produto'
          value=''
          handleOnChange={handleChange}
        />

      </form>
    </section>
  );
}

export default CreateProduct;