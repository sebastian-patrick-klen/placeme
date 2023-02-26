import { motion as m } from 'framer-motion';
import AllPlaces from '@/components/Places/AllPlaces';
import Loading from '@/components/Layout/Loading';
import ReactModal from 'react-modal';
import DeletePlace from '@/components/Editor/DeletePlace';
import { useContext } from 'react';
import ModalContext from '@/store/modal-context';

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

export default function Profile({ places }) {
  const modCtx = useContext(ModalContext);

  function closeModal() {
    modCtx.setClose();
  }
  console.log(places);

  return (
    <m.div
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ y: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!places.message ? (
        <div>
          <ReactModal
            isOpen={modCtx.isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <DeletePlace />
          </ReactModal>
          <AllPlaces placesData={places.places} />
        </div>
      ) : (
        <Loading>Tentu uživatel zatím nepřidal žádné příspěvky.</Loading>
      )}
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.uid;
  const res = await fetch(
    `https://placeme-backend.onrender.com/api/places/user/${id}`
  );
  const places = await res.json();

  return {
    props: { errorCode: false, places },
  };
}
