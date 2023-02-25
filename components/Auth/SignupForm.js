import { signupSchema } from '@/schemas';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ImageUpload from '../Editor/ImageUpload';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function SingupForm() {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      image: '',
      password: '',
    },
    validationSchema: signupSchema,

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('name', values.name);
      formData.append('password', values.password);
      formData.append('image', values.image);

      console.log(formData);

      fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then(function (res) {
          console.log(res);
          router.push('/');
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
        onBlur={formik.handleBlur}
        isError={formik.errors.name && formik.touched.name}
        errMessage={formik.errors.name}
      />
      <Input
        id='email'
        name='email'
        placeholder='Email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        isError={formik.errors.email && formik.touched.email}
        errMessage={formik.errors.email}
      />
      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Heslo'
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        isError={formik.errors.password}
        errMessage={formik.errors.password}
      />
      <ImageUpload
        placeholder='Vybrat Obrázek'
        onBlur={formik.handleBlur}
        isError={formik.errors.image}
        errMessage={formik.errors.image}
        onChange={(e) => {
          formik.setFieldValue('image', e.target.files[0]);
        }}
      />

      <FormButton isValid={''} type='submit'>
        Zaregistrovat se
      </FormButton>
    </Form>
  );
}
