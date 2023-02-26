import { newPlaceSchema } from '@/schemas';
import PositionContext from '@/store/position-context';
import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import Modal from '../Layout/UI/Modal';
import ImageUpload from './ImageUpload';
import SelectLocation from './SelectLocation';

export default function PlaceEditor() {
  const { data: token } = useSession();
  console.log(token);

  const router = useRouter();
  const posCtx = useContext(PositionContext);
  const [modalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: '',
    },

    validationSchema: newPlaceSchema,

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('lat', posCtx.newPlacePos.lat);
      formData.append('lng', posCtx.newPlacePos.lng);
      formData.append('image', values.image);

      console.log(formData);

      fetch(`https://placeme-backend.onrender.com/api/places`, {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Bearer ${token.user.token}` },
      })
        .then((res) => res.json())
        .then(({ message, place }) => {
          console.log(place, message);
          router.push(`/places/${place.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  // Modal
  useEffect(() => {
    setTimeout(() => closeModal(), 500);
  }, [posCtx.newPlacePos]);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id='title'
          name='title'
          placeholder='Název'
          type='title'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          isError={formik.errors.title && formik.touched.title}
          errMessage={formik.errors.title}
        />
        <Input
          id='description'
          name='description'
          placeholder='Popis'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          isError={formik.errors.description && formik.touched.description}
          errMessage={formik.errors.description}
        />

        <ImageUpload
          placeholder='Vybrat Obrázek'
          onBlur={formik.handleBlur}
          isError={formik.errors.image && formik.touched.image}
          errMessage={formik.errors.image}
          onChange={(e) => {
            formik.setFieldValue('image', e.target.files[0]);
          }}
        />

        <div className='flex flex-col'>
          <button
            type='button'
            onClick={setModalOpen}
            className='w-full mr-4 py-2 px-4
          rounded-full border-0
          text-sm font-semibold
          bg-green-50 text-green-700
          hover:bg-green-100'
          >
            Vybrat místo na mapě
          </button>
        </div>
        <FormButton isValid={formik.isValid} type='submit'>
          Přidat Místo
        </FormButton>
      </Form>
      <AnimatePresence>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={closeModal}>
            <SelectLocation />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
