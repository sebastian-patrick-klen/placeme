import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import ImageUpload from '../Editor/ImageUpload';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function SingupForm() {
  const [imgUrl, setImgUrl] = useState();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      image: '',
      password: '',
    },

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('name', values.name);
      formData.append('password', values.password);
      formData.append('image', imgUrl);

      fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        body: formData,
      })
        .then(function (res) {
          console.log('Successfully signed up!');
        })
        .catch(function (res) {
          console.log('error');
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
      <ImageUpload placeholder='Vybrat Obrázek' setImgUrl={setImgUrl} />

      <FormButton type='submit'>Zaregistrovat se</FormButton>
    </Form>
  );
}
