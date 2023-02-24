import Loading from '@/components/Layout/Loading';
import PlaceDetail from '@/components/Places/PlaceDetail';
import { motion as m } from 'framer-motion';
import ModalContext from '@/store/modal-context';
import { useContext } from 'react';
import ReactModal from 'react-modal';
import DeletePlace from '@/components/Editor/DeletePlace';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    maxWidth: '32rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'rgba(243, 244, 246, 1)',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    border: 'none',
  },
};

export default function HomePage({ place }) {
  const modCtx = useContext(ModalContext);

  function closeModal() {
    modCtx.setClose();
  }

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!place.message ? (
        <>
          <ReactModal
            isOpen={modCtx.isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <DeletePlace />
          </ReactModal>
          <PlaceDetail placesData={place.place} />
        </>
      ) : (
        <Loading>{place.message}</Loading>
      )}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.pid;
  const fetchString = `http://localhost:5000/api/places/${id}`;
  const res = await fetch(fetchString);
  const place = await res.json();

  return {
    props: { place },
  };
}
