import axios from 'axios';
import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import Modal from '../Layout/UI/Modal';
import SelectLocation from './SelectLocation';

export default function PlaceEditor() {
  const [placeCoords, setPlaceCoords] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  // Form
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      img: '',
    },

    onSubmit: (values) => {
      const place = {
        title: values.title,
        description: values.description,
        image: values.img,
        coords: placeCoords,
        creator: '63f22a836525a805c47ded6a',
      };

      axios({
        method: 'POST',
        url: 'http://localhost:5000/api/places',
        data: place,
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

  // Place Location
  const getPlaceLocation = (plCoords) => {
    setPlaceCoords(plCoords);
  };

  useEffect(() => {
    setTimeout(() => closeModal(), 500);
    // closeModal();
  }, [placeCoords]);

  //   Modal
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

        <input
          type='file'
          name='img'
          id='img'
          placeholder='Vyberte Soubor'
          onChange={formik.handleChange}
          value={formik.values.img}
          className='block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-green-50 file:text-green-700
          hover:file:bg-green-100'
        />

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
            <SelectLocation getPlaceLocation={getPlaceLocation} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
