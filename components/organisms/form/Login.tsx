// import Form from "@/atoms/Form"
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import LoginSchema from "./schema/login";
import FormGroup from "@/atoms/FormGroup";
import FormAction from "@/atoms/FormAction";
import Button from "@/atoms/Button";
import Input from '@/molecules/field/Input';
import Form from '@/atoms/Form';
import FormError from '@/atoms/FormError';
import { useEffect, useState } from 'react';
import SubmitForm from '@/molecules/field/SubmitForm';
import { API_ROUTES, instance } from 'config/axios';
import Alert from '@/atoms/Alert';
import { useRouter } from 'next/router';

interface FormValues {
  email: string;
  password: string
}

const initialValue: FormValues = {
  email: '',
  password: '',
}


const Login = () => {
  const [invalidMessage, setInvalidMessage] = useState<string>()
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: initialValue,
    validationSchema: LoginSchema,
    onSubmit: values => onSubmit(values),
  })
  const {isSubmitting} = formik;

  const onSubmit = async (values: FormValues) => {
    instance({
      method: 'POST',
      url: API_ROUTES.AUTH.LOGIN,
      data: values,
    }).then((res) => {
      router.push('/dashboard');
    }).catch((err) => {
      setInvalidMessage(err.response.data.message)
    })
  }

  return (
    <FormikProvider value={formik}>
      {invalidMessage && <Alert style={{marginBottom: '20px'}} type='error'>{invalidMessage}</Alert>}
      <Form noValidate onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
        <Input type='email' label='email' name='email' />
        <Input type='password' label='password' name='password' />
        <SubmitForm isSubmitting={isSubmitting} />
      </Form>
    </FormikProvider>
  )
}

export default Login;