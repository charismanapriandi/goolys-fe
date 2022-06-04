// import Form from "@/atoms/Form"
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import LoginSchema from "./schema/login";
import FormGroup from "@/atoms/FormGroup";
import FormAction from "@/atoms/FormAction";
import Button from "@/atoms/Button";
import Input from '@/molecules/field/Input';
import Form from '@/atoms/Form';
import FormError from '@/atoms/FormError';
import { useEffect } from 'react';
import SubmitForm from '@/molecules/field/SubmitForm';

interface FormValues {
  email: string;
  password: string
}

const initialValue: FormValues = {
  email: '',
  password: '',
}

const Login = () => {
  const formik = useFormik<FormValues>({
    initialValues: initialValue,
    validationSchema: LoginSchema,
    onSubmit: values => console.log(values)
  })

  useEffect(() => {
    console.log(formik.errors)
  }, [formik.errors])
  
  return (
    <FormikProvider value={formik}>
      <Form noValidate onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
        <Input type='email' label='email' name='email' />
        <Input type='password' label='password' name='password' />
        <SubmitForm isSubmitting={formik.isSubmitting} />
      </Form>
    </FormikProvider>
  )
}

export default Login;