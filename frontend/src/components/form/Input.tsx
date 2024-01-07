import { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string
  text: string
  name: string
  placeholder: string
  value: string
  handleOnChange: ChangeEventHandler<HTMLInputElement>
}

function Input({
  name,
  placeholder,
  text,
  type,
  value,
  handleOnChange
}: InputProps) {

  return(
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}/>
    </div>
  );

}

export default Input;