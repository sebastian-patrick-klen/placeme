import DeleteContext from '@/store/delete-context';
import ModalContext from '@/store/modal-context';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function () {
  const { data: token } = useSession();
  const router = useRouter();
  const modCtx = useContext(ModalContext);
  const delCtx = useContext(DeleteContext);

  function handleDelete() {
    axios({
      method: 'delete',
      url: `https://placeme-backend.onrender.com/api/places/${delCtx.newId}`,
      headers: { Authorization: `Bearer ${token.user.token}` },
    })
      .then((res) => {
        console.log(res);
        router.push(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
    delCtx.setNewId(null);
    modCtx.setClose();
  }

  return (
    <div className='my-4 bg-gray-100 max-w-lg flex flex-col gap-4'>
      <h3 className='mb-3 text-lg font-semibold text-center'>
        Opravdu chcete smazat tento příspěvek?
      </h3>
      <p className='text-center'>
        Upozorňuji vás, že smazání příspěvku je nevratný krok a veškerý obsah
        bude trvale odstraněn.
      </p>

      <div className='pt-4 flex items-center justify-center gap-3'>
        <button
          onClick={() => {
            delCtx.setNewId(null);
            modCtx.setClose();
          }}
          className='px-5 py-3 bg-gray-400/80 hover:bg-gray-400 text-sm uppercase text-white font-bold rounded-lg transition-colors'
        >
          Zrušit
        </button>
        <button
          onClick={handleDelete}
          className='px-5 py-3 bg-red-500 hover:bg-red-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'
        >
          Smazat
        </button>
      </div>
    </div>
  );
}
