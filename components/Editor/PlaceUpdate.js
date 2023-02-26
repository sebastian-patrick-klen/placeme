import { updatePlaceSchema } from '@/schemas';
import PositionContext from '@/store/position-context';
import axios from 'axios';
import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import Modal from '../Layout/UI/Modal';
import SelectLocation from './SelectLocation';

export default function PlaceUpdate({ isEdit, placeData }) {
  const [isOpen, setIsOPen] = useState(false);
  const { data: token } = useSession();
  const router = useRouter();
  const posCtx = useContext(PositionContext);
  const [modalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },

    validationSchema: updatePlaceSchema,

    onSubmit: (values) => {
      setIsOPen(true);
      const formData = {
        title: values.title,
        description: values.description,
        lat: posCtx.newPlacePos.lat,
        lng: posCtx.newPlacePos.lng,
      };
      const fetchString = `https://placeme-backend.onrender.com/api/places/${placeData._id}`;

      fetch(fetchString, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.user.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          router.push(`/places/${res.place.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    formik.setFieldValue('title', placeData.title);
    formik.setFieldValue('description', placeData.description);
    posCtx.setNewPlacePos(placeData.coords);
  }, [placeData]);

  // Modal
  useEffect(() => {
    setTimeout(() => closeModal(), 500);
  }, [posCtx.newPlacePos]);

  const closeModal = () => setModalOpen(false);

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id='title'
          name='title'
          placeholder='Název'
          type='title'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.title}
          isError={formik.errors.title && formik.touched.title}
          errMessage={formik.errors.title}
        />
        <Input
          id='description'
          name='description'
          placeholder='Popis'
          type='text'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
          isError={formik.errors.description && formik.touched.description}
          errMessage={formik.errors.description}
        />

        <button
          type='button'
          onBlur={() => {
            setIsOPen(true);
          }}
          onClick={setModalOpen}
          className='w-full mr-4 py-2 px-4
          rounded-full border-0
          text-sm font-semibold
          bg-green-50 text-green-700
          hover:bg-green-100'
        >
          Vybrat místo na mapě
        </button>

        <FormButton isValid={formik.isValid} type='submit'>
          Uložit změny
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
