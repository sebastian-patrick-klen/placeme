import PositionContext from '@/store/position-context';
import axios from 'axios';
import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import Modal from '../Layout/UI/Modal';
import ImageUpload from './ImageUpload';
import SelectLocation from './SelectLocation';

export default function PlaceEditor({ isEdit, placeData }) {
  const router = useRouter();
  const posCtx = useContext(PositionContext);
  const [modalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: '',
    },

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('lat', posCtx.newPlacePos.lat);
      formData.append('lng', posCtx.newPlacePos.lng);
      {
        !isEdit && formData.append('image', values.image);
      }
      formData.append('creator', '63f7533cc719a072cb3c8cef');

      console.log(formData);

      console.log(placeData.id);
      fetch(
        !isEdit
          ? 'http://localhost:5000/api/places'
          : `http://localhost:5000/api/places/${placeData._id}`,
        {
          method: !isEdit ? 'POST' : 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then(({ message, place }) => {
          console.log(place, message);
          router.push(`/places/${place.id}`);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  });
  {
    isEdit &&
      useEffect(() => {
        formik.setFieldValue('title', placeData.title);
        formik.setFieldValue('description', placeData.description);
        posCtx.setNewPlacePos(placeData.coords);
      }, [placeData]);
  }

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
          value={formik.values.title}
        />
        <Input
          id='description'
          name='description'
          placeholder='Popis'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        {!isEdit && (
          <ImageUpload
            placeholder='Vybrat Obrázek'
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
          />
        )}

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

        <FormButton type='submit'>Přidat Místo</FormButton>
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
