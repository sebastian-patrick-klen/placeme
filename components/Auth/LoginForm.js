import axios from 'axios';
import { useFormik } from 'formik';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      axios({
        method: 'POST',
        url: 'http://localhost:5000/api/users/login',
        data: values,
      })
        .then(function (res) {
          console.log(res);
          alert('Successfully logged up!');
        })
        .catch(function (res) {
          console.log(res);
        });
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
