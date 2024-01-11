import api from '../utils/api';
import useFlashMessage from './useFlashMessages';

export async function deleteProduct(id:string) {
    
  let msgType = 'success';

  const { setFlashMessage } = useFlashMessage();

  const data = await api.delete(`/products/${id}`)
    .then((response) => {

      setTimeout(() => {
        window.location.reload();
      }, 400);
      
      return response.data;
    })
    .catch((error: any) => {
      
      msgType = 'error';
      return error.response.data;

    });

  setFlashMessage(data.message, msgType);
}
