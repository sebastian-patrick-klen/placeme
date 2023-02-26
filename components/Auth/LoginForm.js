import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import { signIn, useSession } from 'next-auth/react';
import { loginSchema } from '@/schemas';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      setIsLoading(true);
      signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      }).then((res) => {
        console.log(res);
        if (res.ok) router.push(`/`);
        setIsLoading(false);
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
        isError={formik.errors.password && formik.touched.password}
        errMessage={formik.errors.password}
      />

      <FormButton isValid={formik.isValid && !isLoading} type='submit'>
        {!isLoading ? 'Přihlásit se' : 'Přihlašování...'}
      </FormButton>
    </Form>
  );
}
