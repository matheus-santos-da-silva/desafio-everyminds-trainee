import { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string
  text: string
  name: string
  placeholder: string
  value: string | number
  handleOnChange: ChangeEventHandler<HTMLInputElement>
}

function Input({
  name,
  placeholder,
  text,
  type,
  handleOnChange
}: InputProps) {

  return(
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}/>
    </div>
  );

}

export default Input;