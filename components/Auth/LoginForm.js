import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      }).then((res) => {
        console.log(res);
        if (res.ok) router.push(`/`);
      });
      // TESTING AFTER TESTING UNCOMMENT - NO REMOVE
      // axios({
      //   method: 'POST',
      //   url: 'http://localhost:5000/api/users/login',
      //   data: values,
      // })
      //   .then(function (res) {
      //     console.log(res.data);
      //     router.push(`/user/${res.data.id}`);
      //   })
      //   .catch(function (res) {
      //     console.log(res);
      //   });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        name='email'
        placeholder='Email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Heslo'
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <FormButton type='submit'>Přihlásit se</FormButton>
    </Form>
  );
}
