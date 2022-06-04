import FormGroup from "@/atoms/FormGroup"
import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect } from "react";
import { FieldProps, useField } from 'formik';
import FormError from "@/atoms/FormError";

interface Props {
  type: 'text' | 'email' | 'password'
  name: string;
  label: string;
  error?: string
}

const Input: FC<Props> = ({type, name, label, error}) => {
  const [field, meta, helpers] = useField(name)
  
  return (
    <FormGroup>
      <label htmlFor={field.name}>{label}</label>
      <input 
        onChange={field.onChange} 
        value={field.value} 
        id={field.name} 
        name={field.name} 
        type={type} />
      {meta.error && <FormError>{meta.error}</FormError>}
    </FormGroup>
  )
}

export default Input;