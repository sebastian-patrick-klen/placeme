import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import { signIn } from 'next-auth/react';
import { loginSchema } from '@/schemas';

export default function LoginForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      }).then((res) => {
        console.log(res);
        if (res.ok) router.push(`/`);
      });
    },
  });

  console.log(formik.touched.email);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        name='email'
        placeholder='Email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        isError={formik.errors.email && formik.touched.email}
        errMessage={formik.errors.email}
      />
      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Heslo'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        isError={formik.errors.password}
        errMessage={formik.errors.password}
      />

      <FormButton type='submit'>Přihlásit se</FormButton>
    </Form>
  );
}
