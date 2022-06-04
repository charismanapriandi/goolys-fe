import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Email is required field'),
  password: yup.string().required('Password is required field'),
})

export default LoginSchema;