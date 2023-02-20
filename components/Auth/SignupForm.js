import axios from 'axios';
import { useFormik } from 'formik';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function SingupForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log(values);
      axios({
        method: 'POST',
        url: 'http://localhost:5000/api/users/signup',
        data: values,
      })
        .then(function (res) {
          console.log(res);
          alert('Successfully signed up!');
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type='text'
        name='name'
        id='name'
        placeholder='Jméno'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
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

      <FormButton type='submit'>Zaregistrovat se</FormButton>
    </Form>
  );
}
